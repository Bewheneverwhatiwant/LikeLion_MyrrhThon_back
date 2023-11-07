from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


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
