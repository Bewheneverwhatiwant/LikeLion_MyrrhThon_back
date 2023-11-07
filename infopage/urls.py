from django.urls import path
from .views import InfopageGetView

urlpatterns = [
    path('', InfopageGetView.as_view(), name='game'),
]