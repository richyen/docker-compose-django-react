from rest_framework import serializers
from api.upload.models import Upload


class UploadSerializer(serializers.ModelSerializer):
    uploaded_at = serializers.DateTimeField()
    file = serializers.FileField()

    class Meta:
        model = Upload
        fields = '__all__'
