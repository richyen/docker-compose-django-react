from rest_framework import serializers
from .models import Mentor

class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = ("mentor_id", "picture_url", "user_id")