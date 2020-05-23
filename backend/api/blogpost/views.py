from django.shortcuts import render
from rest_framework import generics, viewsets, status
from rest_framework import permissions
from rest_framework.response import Response

from .models import Blogpost, Tag
from .serializers import BlogpostSerializer, TagSerializer

# Create your views here.
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

class BlogpostViewSet(viewsets.ModelViewSet):
	"""
	API endpoint that allows BlogpostContents to be viewed or edited.
	"""
	queryset = Blogpost.objects.all()
	serializer_class = BlogpostSerializer

	def get_queryset(self):
		result = Blogpost.objects.all()
		queried_author = self.request.query_params.get('author_id', None)
		if queried_author is not None:
			result = result.filter(author_id=queried_author)

		queried_tag = self.request.query_params.get('tag_id', None) # TODO: not sure why this works
		if queried_tag is not None:
			result = result.filter(tag__id=queried_tag)

		return result

class TagViewSet(viewsets.ModelViewSet):
	"""
	API Endpoint to CRUD tags
	"""
	queryset = Tag.objects.all()
	serializer_class = TagSerializer