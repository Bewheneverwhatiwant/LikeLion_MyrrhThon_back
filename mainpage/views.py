from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# 세션에 정보가 없어도 메인페이지로 200
class MainpageGetView(APIView):

    def get(self, request, *args, **kwargs):
        user_info = request.session.get('user_info')
        return Response(user_info if user_info else {}, status=status.HTTP_200_OK)

# # 세션에 정보가 있어야만 메인페이지 200
# class MainpageGetView(APIView):

#     def get(self, request, *args, **kwargs):
#         user_info = request.session.get('user_info', None)
#         if user_info:
#             return Response(user_info, status=status.HTTP_200_OK)
#         else:
#             return Response({'message': 'No user information available.'}, status=status.HTTP_404_NOT_FOUND)