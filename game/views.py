from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class GameGetView(APIView):
    def get(self, request, format=None):
        data = {
            'message': '게임 페이지 GET'
        }
        return Response(data, status=status.HTTP_200_OK)
