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
            user_info = serializer.validated_data
            user_info['period'] = user_info['period'].isoformat()
            request.session['user_info'] = user_info
            return Response({
                'message': 'User info saved. Proceed to the next page.',
                'data': user_info
            })
        else:
            return Response(serializer.errors, status=400)

class UserDataAPIView(APIView):
    def get(self, request, *args, **kwargs):
        user_info = request.session.get('user_info', None)
        if user_info:
            user_info['period'] = datetime.fromisoformat(user_info['period']).date()
            serializer = UserInfoSerializer(user_info)
            return Response(serializer.data)
        else:
            return Response({'message': 'No data found.'}, status=404)
