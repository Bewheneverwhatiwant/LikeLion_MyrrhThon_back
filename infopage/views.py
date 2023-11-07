from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class InfopageGetView(APIView):
    def get(self, request, format=None):
        data = {
            'message': '정보 페이지 GET'
        }
        return Response(data, status=status.HTTP_200_OK)
