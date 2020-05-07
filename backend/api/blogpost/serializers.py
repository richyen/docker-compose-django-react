from rest_framework import serializers
from .models import Blogpost

class BlogpostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Blogpost
		fields = '__all__'