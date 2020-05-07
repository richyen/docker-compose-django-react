from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework import permissions
from rest_framework.response import Response

from .models import BlogpostContent
from .serializers import BlogpostContentSerializer



# Create your views here.
class ListBlogpostContentView(generics.ListAPIView):
	"""
	Provides a get method handler
	"""
	queryset = BlogpostContent.objects.all()
	serializer_class = BlogpostContentSerializer

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

class BlogpostContentViewSet(viewsets.ModelViewSet):
	"""
	API endpoint that allows BlogpostContents to be viewed or edited.
	"""
	queryset = BlogpostContent.objects.all()
	serializer_class = BlogpostContentSerializer
