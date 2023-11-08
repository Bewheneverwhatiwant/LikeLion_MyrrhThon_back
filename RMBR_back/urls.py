from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('member/', include('dj_rest_auth.urls')),
    path('member/', include('member.urls')),
    path('member/signup/', include('dj_rest_auth.registration.urls')),
    path('mypage/', include('mypage.urls')),
    path('mainpage/', include('mainpage.urls')),
    path('user_info/', include('user_info.urls')),
]
