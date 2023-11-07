from django.shortcuts import render
from rest_framework import viewsets
from .models import Family
from .serializers import FamilySerializer

class FamilyViewSet(viewsets.ModelViewSet):
    queryset = Family.objects.all()
    serializer_class = FamilySerializer

