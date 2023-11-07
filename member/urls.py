from rest_framework.routers import SimpleRouter
from django.urls import path, include
from .views import *

app_name = 'member'


urlpatterns = [
    path('familymembers/', FamilyMembersView.as_view(), name='familymembers-list'),
]