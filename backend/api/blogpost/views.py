"""
These views pertain to Blogposts.
"""
from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from api.blogpost.models import Blogpost, Tag, Topic
from api.blogpost.serializers import BlogpostSerializer, TagSerializer, TopicSerializer


class ListBlogpostView(generics.ListAPIView):
    """
    Provides a get method handler
    """
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer


class BlogpostDetailView(generics.ListAPIView):
    """
    Provides a detailed view for a specific blogpost
    """
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer

    def get(self, request, *args, **kwargs):
        try:
            a_blogpost = self.queryset.get(pk=kwargs["pk"])
            return Response(BlogpostSerializer(a_blogpost).data)
        except Blogpost.DoesNotExist:
            return Response(
                data={
                    "message": "Blogpost with id: {} does not exist".format(kwargs["pk"])
                },
                status=status.HTTP_404_NOT_FOUND
            )


class BlogpostViewSet(viewsets.ModelViewSet):  # pylint: disable=too-many-ancestors
    """
    API endpoint that allows BlogpostContents to be viewed or edited.
    """
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer

    def get_queryset(self):
        result = Blogpost.objects.all()
        queried_author = self.request.query_params.get('author', None)
        if queried_author is not None:
            result = result.filter(author=queried_author)

        # TODO: not sure why this works
        queried_tag = self.request.query_params.get('tag_id', None)
        queried_tag_name = self.request.query_params.get('tag', None)
        if queried_tag is not None:
            result = result.filter(tag__id=queried_tag)
        if queried_tag_name is not None:
            result = result.filter(tag__name=queried_tag_name)
        return result


class TagViewSet(viewsets.ModelViewSet):  # pylint: disable=too-many-ancestors
    """
    API Endpoint to CRUD tags
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class TopicViewSet(viewsets.ModelViewSet):  # pylint: disable=too-many-ancestors
    """
    API Endpoint to CRUD topics
    """
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
