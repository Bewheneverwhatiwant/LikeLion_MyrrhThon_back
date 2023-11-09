from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FamilyViewSet,PostListView,PostViewSet,PostDetailView,FamilyPostView


router = DefaultRouter()
router.register(r'families', FamilyViewSet)


urlpatterns = [
    path('posts/', PostListView.as_view(), name='user-posts'),
    path('post/create/', PostViewSet.as_view({'post': 'create_post'}), name='create-post'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('family/<int:family_id>/posts/', FamilyPostView.as_view({'get': 'list_posts', 'post': 'create_post'}), name='family-posts'),
    path('family/<int:family_id>/posts/<int:pk>/', FamilyPostView.as_view({'put': 'update_post', 'delete': 'update_post'}), name='family-post-detail'),
]