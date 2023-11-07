from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import AnonymousUser

class MyPageView(APIView):

    def get(self, request, *args, **kwargs):
        # 로그인된 사용자인 경우
        if not isinstance(request.user, AnonymousUser):
            user = request.user
            data = {
                'nickname': user.nickname,
                'gender' : 'male',
                'age' : 50,
            }
        # 비로그인 사용자인 경우 세션 정보 반환
        else:
            user_info = request.session.get('user_info', {})
            data = {
                'nickname': user_info.get('name', 'Guest'),
                'gender': user_info.get('gender', 'male'), 
                'age': user_info.get('age'),
            }
        return Response(data, status=status.HTTP_200_OK)