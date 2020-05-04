from rest_framework import serializers
from .models import BlogpostContent

class BlogpostContentSerializer(serializers.ModelSerializer):
	class Meta:
		model = BlogpostContent
		fields = ("language", "blogpost_id", "title_content", "body_content", "last_updated")