from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils import timezone


class CustomUserManager(BaseUserManager):
    def _create_user(self, username, password, **extra_fields):

        if not username:
            raise ValueError('The given username must be set')
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, password, **extra_fields)


class CustomUser(AbstractUser):
    REQUIRED_FIELDS = []
    email = None  
    nickname = models.CharField(max_length=100)

    objects = CustomUserManager()

    def __str__(self):
        return self.username


class Family(models.Model):
    members = models.ManyToManyField(CustomUser, related_name='families')

class Post(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)  # Foreign key로 사용자 모델과 연결
    title = models.CharField(max_length=50)
    content = models.TextField()
    date = models.DateField(default=timezone.now)  # 현재 날짜를 기본값으로 설정
    image = models.ImageField(upload_to='media/', null=True)


    def __str__(self):
        return self.title  # 게시글의 제목을 표시하도록 설정 (선택 사항)
    
class FamilyPost(models.Model):
    family = models.ForeignKey(Family, on_delete= models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete = models.CASCADE)
    title = models.CharField(max_length= 100)
    content = models.TextField()
    image = models.ImageField(upload_to="media/",null = True)
    date = models.DateField(default = timezone.now)

    def __str__(self):
        return self.title


