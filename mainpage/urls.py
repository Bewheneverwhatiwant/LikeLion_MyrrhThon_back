from django.urls import path
from .views import MainpageGetView
from user_info.views import UserDataAPIView

urlpatterns = [
    path('', UserDataAPIView.as_view(), name='game'),
]