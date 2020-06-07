from rest_framework import serializers
from api.blogpost.models import Blogpost, Tag, Topic

class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = (
            'id',
            'media_url',
            'author',
            'slug',
            'is_featured',
            'topic_set',
            'tag_set'
        )
        depth = 1

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class TopicSerializer(serializers.ModelSerializer):
    blogpost = BlogpostSerializer(many=True, read_only=True)
    class Meta:
        model = Topic
        fields = '__all__'

