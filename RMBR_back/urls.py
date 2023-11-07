from django.contrib import admin
from django.urls import path, include

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg       import openapi


urlpatterns = [
    path('admin/', admin.site.urls),
    path('member/', include('dj_rest_auth.urls')),
    path('member/', include('member.urls')),
    path('member/signup/', include('dj_rest_auth.registration.urls')),
    path('mypage/', include('mypage.urls')),
    path('mainpage/', include('mainpage.urls')),
    path('user_info/', include('user_info.urls')),
]


# swagger
schema_view = get_schema_view(
    openapi.Info(
        title="Remember",
        default_version='v1',
        description="Remember API 문서",
        terms_of_service="https://www.google.com/policies/terms/",
        # contact=openapi.Contact(email="이메일"), # 부가정보
        # license=openapi.License(name="mit"),     # 부가정보
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path(r'swagger(?P<format>\.json|\.yaml)', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path(r'swagger', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path(r'redoc', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc-v1'),
    # 이 아랫 부분은 우리가 사용하는 app들의 URL
    path('member/', include('dj_rest_auth.urls')),
    path('member/', include('member.urls')),
    path('member/signup/', include('dj_rest_auth.registration.urls')),
    path('mypage/', include('mypage.urls')),
    path('mainpage/', include('mainpage.urls')),
    path('user_info/', include('user_info.urls')),
]
