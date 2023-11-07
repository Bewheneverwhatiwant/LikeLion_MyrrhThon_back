from rest_framework import serializers

class UserInfoSerializer(serializers.Serializer):
    GENDER_CHOICES = [('male', 'Male'), ('female', 'Female')]

    gender = serializers.ChoiceField(choices=GENDER_CHOICES)
    name = serializers.CharField(max_length=100)
    age = serializers.IntegerField(min_value=0)
    period = serializers.DateField()