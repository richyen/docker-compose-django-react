from rest_framework import serializers
from .models import Blogpost

class BlogpostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Blogpost
		fields = ("title", "body", "media_url", "author_id", "posted_on", "last_updated")