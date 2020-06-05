from rest_framework import serializers
from api.mentor.models import Mentor


class MentorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = ("id", "picture_url", "user_id")
