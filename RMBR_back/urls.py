from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.index, name='index'),
    path('member/', include('dj_rest_auth.urls')),
    path('member/', include('member.urls')),
    path('member/signup/', include('dj_rest_auth.registration.urls')),

    path('mypage/', include('mypage.urls')),
]
