from django.contrib import admin
from .models import CustomUser, Family
# Register your models here.

admin.site.register(CustomUser)
admin.site.register(Family)