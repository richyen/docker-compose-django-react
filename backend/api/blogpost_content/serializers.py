from rest_framework import serializers
from .models import BlogpostContent

class BlogpostContentSerializer(serializers.ModelSerializer):
	class Meta:
		model = BlogpostContent
		fields = '__all__'