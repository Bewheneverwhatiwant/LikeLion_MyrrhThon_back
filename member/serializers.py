from dj_rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from .models import CustomUser, Family

class CustomRegisterSerializer(RegisterSerializer):
    nickname = serializers.CharField(max_length=100)
    invited_users = serializers.ListField(
        child=serializers.CharField(allow_blank=True, required=False),
        required=False,
        allow_empty=True
    )

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        invited_users = [u for u in self.validated_data.get('invited_users', []) if u]
        data.update({
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'nickname': self.validated_data.get('nickname', ''),
            'email': self.validated_data.get('email', ''),
            'invited_users': invited_users,
        })
        return data

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.username = self.cleaned_data.get('username')
        user.nickname = self.cleaned_data.get('nickname')
        user.save()
        invited_usernames = self.cleaned_data.get('invited_users', [])
        family = Family.objects.create()
        family.members.add(user)
        for invited_username in invited_usernames:
            if not invited_username:
                continue
            try:
                invited_user = CustomUser.objects.get(username=invited_username)
                family.members.add(invited_user)
            except CustomUser.DoesNotExist:
                pass
        adapter.save_user(request, user, self)
        return user
    

class CustomUserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'password', 'nickname']


class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        model = Family
        fields = ['members']