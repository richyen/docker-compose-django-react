from django.shortcuts import render
from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response

from .models import Blogposts
from .serializers import BlogpostsSerializer



# Create your views here.
class ListBlogpostsView(generics.ListAPIView):
	"""
	Provides a get method handler
	"""
	queryset = Blogposts.objects.all()
	serializer_class = BlogpostsSerializer

class BlogpostsDetailView(generics.ListAPIView):
	"""
	Provides a detailed view for a specific blogpost
	"""
	queryset = Blogposts.objects.all()
	serializer_class = BlogpostsSerializer

	def get(self, request, *args, **kwargs):
		try:
			a_blogpost = self.queryset.get(pk=kwargs["pk"])
			return Response(BlogpostsSerializer(a_blogpost).data)
		except Blogposts.DoesNotExist:
			return Response(
				data={
					"message": "Blogpost with id: {} does not exist".format(kwargs["pk"])
				},
				status=status.HTTP_404_NOT_FOUND
			)
