from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .models import Family, CustomUser

class CustomUserRegisterView(CreateAPIView):
    serializer_class = CustomRegisterSerializer

    def create(self, request, *args, **kwargs):
        invited_usernames = request.data.get('invited_users', [])

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self.perform_create(serializer)
        user.save()

        # Family를 찾거나 생성
        try:
            family = Family.objects.get(members=user)
        except Family.DoesNotExist:
            family = Family.objects.create(name=user.username)
            family.members.add(user)

        # 초대된 사용자를 family에 추가
        for username in invited_usernames:
            try:
                invited_user = CustomUser.objects.get(username=username)
                family.members.add(invited_user)
            except CustomUser.DoesNotExist:
                pass  # 존재하지 않는 사용자는 스킵

        return Response(serializer.data, status=status.HTTP_201_CREATED)



class FamilyMembersView(ListAPIView):
    serializer_class = FamilySerializer

    def get_queryset(self):
        user = self.request.user
        # 현재 로그인한 사용자가 속한 Family를 가져오기
        try:
            family = Family.objects.get(members=user)
            # Family의 멤버들을 가져와서 반환
            members = family.members.all()
            return members
        except Family.DoesNotExist:
            return Family.objects.none()