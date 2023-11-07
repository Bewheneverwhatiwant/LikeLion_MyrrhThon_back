from django.urls import path
from .views import GameGetView

urlpatterns = [
    path('', GameGetView.as_view(), name='game'),
]