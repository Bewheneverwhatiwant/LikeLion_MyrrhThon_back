from dj_rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from rest_framework import serializers
from .models import CustomUser, Family


class CustomRegisterSerializer(RegisterSerializer):
    nickname = serializers.CharField(max_length=100)
    invited_users = serializers.ListField(child=serializers.CharField(), required=False)
    # invited_users = serializers.ListField(child=serializers.IntegerField(), required=False)  # ID를 사용
    # invited_users = serializers.StringRelatedField(many=True, read_only=True, required=False)  # username을 사용

    def get_cleaned_data(self):
        super(CustomRegisterSerializer, self).get_cleaned_data()
        return {
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'nickname': self.validated_data.get('nickname', ''),
        }
    
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.username = self.cleaned_data.get('username')
        user.nickname = self.cleaned_data.get('nickname')
        user.save()  

        invited_usernames = self.validated_data.get('invited_users', [])
        for username in invited_usernames:
            invited_user = CustomUser.objects.get(username=username)
            user.invited_users.add(invited_user)  # 초대된 사용자를 추가

        adapter.save_user(request, user, self)
        return user

class CustomUserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'password', 'nickname', 'invited_users']


class FamilySerializer(serializers.ModelSerializer) :
    member = CustomRegisterSerializer(read_only=True, many=True)
    class Meta:
        model = Family
        fields = ['members']