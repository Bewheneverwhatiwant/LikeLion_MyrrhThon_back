from django.urls import path
from .views import UserInputAPIView

urlpatterns = [
    path('input/', UserInputAPIView.as_view(), name='user-input'),
]