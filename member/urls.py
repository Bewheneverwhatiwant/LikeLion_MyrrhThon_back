from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FamilyViewSet,PostListView,PostViewSet,PostDetailView


router = DefaultRouter()
router.register(r'families', FamilyViewSet)


urlpatterns = [
    path('posts/', PostListView.as_view(), name='user-posts'),
    path('post/create/', PostViewSet.as_view({'post': 'create_post'}), name='create-post'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
]