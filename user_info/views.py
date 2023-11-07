from django.shortcuts import render
# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserInfoSerializer
from datetime import datetime

class UserInputAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserInfoSerializer(data=request.data)
        if serializer.is_valid():
            # 시리얼라이즈된 데이터를 가져옵니다.
            user_info = serializer.validated_data
            # date 객체를 ISO 형식의 문자열로 변환합니다.
            user_info['period'] = user_info['period'].isoformat()
            # 세션에 문자열로 저장합니다.
            request.session['user_info'] = user_info
            return Response({
                'message': 'User info saved. Proceed to the next page.',
                'data': user_info
            })
        else:
            return Response(serializer.errors, status=400)

class UserDataAPIView(APIView):
    def get(self, request, *args, **kwargs):
        # 세션에서 데이터를 가져옴
        user_info = request.session.get('user_info', None)
        if user_info:
            # 문자열로 저장된 date를 datetime.date 객체로 변환합니다.
            user_info['period'] = datetime.fromisoformat(user_info['period']).date()
            serializer = UserInfoSerializer(user_info)
            return Response(serializer.data)
        else:
            return Response({'message': 'No data found.'}, status=404)
