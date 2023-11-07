from django.shortcuts import render
from rest_framework import viewsets
from .models import Family
from .serializers import FamilySerializer
from dj_rest_auth.registration.views import RegisterView
from rest_framework.response import Response


class FamilyViewSet(viewsets.ModelViewSet):
    queryset = Family.objects.all()
    serializer_class = FamilySerializer