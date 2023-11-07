from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    REQUIRED_FIELDS = []
    email = None
    nickname = models.CharField(max_length=100)
    invited_users = models.ManyToManyField('self', related_name='invited_by', blank=True)
    
    def add_invited_user(self, username):
        invited_user = CustomUser.objects.get(username=username)
        self.invited_users.add(invited_user)


class Family(models.Model):
    name = models.CharField(max_length=100)
    members = models.ManyToManyField(CustomUser)