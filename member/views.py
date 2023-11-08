from django.shortcuts import render
from rest_framework import viewsets
from .models import Family
from .serializers import FamilySerializer
from dj_rest_auth.registration.views import RegisterView
from rest_framework.response import Response

from django.http import JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404

from .models import Post
from .serializers import PostSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.utils import timezone

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

import json


class FamilyViewSet(viewsets.ModelViewSet):
    queryset = Family.objects.all()
    serializer_class = FamilySerializer

class PostListView(View):
    @csrf_exempt
    def get(self, request):
        if not request.user.is_authenticated:
            return JsonResponse({'error': '인증되지 않았습니다.'}, status=401,json_dumps_params={'ensure_ascii': False})
        
        user = request.user
        posts = Post.objects.filter(user=user.id)
        serialized_posts = PostSerializer(posts, many=True).data
        return JsonResponse({'posts': serialized_posts},json_dumps_params={'ensure_ascii': False})

class PostViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['post'])
    def create_post(self, request):
        if not request.user.is_authenticated:
            return Response({'error': '인증되지 않았습니다.'}, status=401)

        title = request.data.get("title")
        if title is None or title.strip() == "":
            return Response({'error': '제목을 입력하세요.'}, status=400)

        user = request.user
        content = request.data.get("content")

        post = Post(user=user, title=title, content=content, date=timezone.now())
        post.save()

        return Response({'message': '게시물이 생성되었습니다.'}, status=201)
        return JsonResponse({'message': '게시물이 생성되었습니다.'}, status=200, json_dumps_params={'ensure_ascii': False})

class PostDetailView(View):
    def get(self, request, pk):
        user = request.user
        post = get_object_or_404(Post, pk=pk, user=user)
        serialized_post = PostSerializer(post).data
        return JsonResponse({'post': serialized_post},json_dumps_params={'ensure_ascii': False})

    def put(self, request, pk):
        user = request.user
        post = get_object_or_404(Post, pk=pk, user=user)

        # JSON 데이터 읽기
        try:
            data = json.loads(request.body.decode('utf-8'))
        except json.JSONDecodeError as e:
            return JsonResponse({'error': '잘못된 JSON 데이터입니다.'}, status=400)

        # JSON 데이터를 기반으로 게시물 업데이트 로직을 추가
        title = data.get("title")
        content = data.get("content")

        if title is not None:
            post.title = title
        if content is not None:
            post.content = content

        post.save()

        return JsonResponse({'message': '게시물이 업데이트되었습니다.'}, json_dumps_params={'ensure_ascii': False})

    def delete(self, request, pk):
        user = request.user
        post = get_object_or_404(Post, pk=pk, user=user)
        post.delete()
        return JsonResponse({'message': '게시물이 삭제되었습니다.'},json_dumps_params={'ensure_ascii': False})