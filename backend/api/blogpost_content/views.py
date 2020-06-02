"""
These views pertain to BlogpostContent.
"""
from datetime import datetime
from django.contrib.postgres.search import SearchVector
from rest_framework import generics, viewsets, status
from rest_framework.response import Response
from .models import BlogpostContent
from .serializers import BlogpostContentSerializer


class ListBlogpostContentView(generics.ListAPIView):
    """
    Provides a get method handler
    """
    queryset = BlogpostContent.objects.all()
    serializer_class = BlogpostContentSerializer

    def get_queryset(self):
        queried_language = self.kwargs['language']
        result = BlogpostContent.objects.all()
        if queried_language:
            result = result.filter(language=queried_language)
        return result


class BlogpostContentDetailView(generics.ListAPIView):
    """
    Provides a detailed view for a specific blogpost
    """
    queryset = BlogpostContent.objects.all()
    serializer_class = BlogpostContentSerializer

    def get(self, request, *args, **kwargs):
        try:
            a_blogpost_content = self.queryset.get(pk=kwargs["pk"])
            return Response(BlogpostContentSerializer(a_blogpost_content).data)
        except BlogpostContent.DoesNotExist:
            return Response(
                data={
                    "message": "BlogpostContent with id: {} does not exist".format(kwargs["pk"])
                },
                status=status.HTTP_404_NOT_FOUND
            )


class BlogpostContentViewSet(viewsets.ModelViewSet):  # pylint: disable=too-many-ancestors
    """
    API endpoint that allows BlogpostContents to be viewed or edited.
    """
    queryset = BlogpostContent.objects.all()
    serializer_class = BlogpostContentSerializer

    def get_queryset(self):
        """
        Get the set of BlogpostContent objects based on the search query.
        You can filter by language and blogpost explicitly (?language=en, for example).
        You can also pass in query string which will search the titles, bodies, and the
        tags associated with the blogpost.
        :return: a set of BlogpostContent
        """
        queried_language = self.request.query_params.get('language', None)
        queried_blogpost = self.request.query_params.get('blogpost', None)
        query_text = self.request.query_params.get('query', None)
        featured = self.request.query_params.get('featured', False)
        published_only = self.request.query_params.get('published', False)
        if query_text is not None:
            search_vector = SearchVector('title_content', 'body_content', 'blogpost__tag__name')
            result = BlogpostContent.objects.\
                annotate(search=search_vector).filter(search__icontains=query_text)
        else:
            result = BlogpostContent.objects.all()
        if queried_language is not None:
            result = result.filter(language=queried_language)
        if queried_blogpost is not None:
            result = result.filter(blogpost=queried_blogpost)
        if featured and featured.lower() == 'true':
            result = result.filter(blogpost__is_featured=True)
            result = result.filter(is_draft=False)
            result = result.filter(publish_at__lte=datetime.now())
        if published_only and not published_only.lower() == 'false':
            result = result.filter(is_draft=False)
            result = result.filter(publish_at__lte=datetime.now())
        return result
