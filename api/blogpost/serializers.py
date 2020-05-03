from rest_framework import serializers
from .models import Blogposts

class BlogpostsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Blogposts
		fields = ("title", "body", "media_url", "author_id", "posted_on", "last_updated")