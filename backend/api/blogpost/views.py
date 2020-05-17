from django.shortcuts import render
from rest_framework import generics, viewsets, status
from rest_framework import permissions
from rest_framework.response import Response

from .models import Blogpost
from .serializers import BlogpostSerializer



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
		print(self.request.query_params)
		queried_author = self.request.query_params.get('author_id', None)
		if queried_author is not None:
			result = result.filter(author_id=queried_author)
		return result
