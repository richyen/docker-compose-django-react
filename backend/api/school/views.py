from django.shortcuts import render
from rest_framework import generics, viewsets, status
from rest_framework import permissions
from rest_framework.response import Response
from .models import School
from .serializers import SchoolSerializer


# Create your views here.
class ListSchoolView(generics.ListAPIView):
    """
	Provides a get method handler
	"""
    queryset = School.objects.all()
    serializer_class = SchoolSerializer


class BlogpostDetailView(generics.ListAPIView):
    """
	Provides a detailed view for a specific blogpost
	"""
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

    def get(self, request, *args, **kwargs):
        try:
            a_school = self.queryset.get(pk=kwargs["pk"])
            return Response(SchoolSerializer(a_school).data)
        except School.DoesNotExist:
            return Response(
                data={
                    "message": "School with id: {} does not exist".format(kwargs["pk"])
                },
                status=status.HTTP_404_NOT_FOUND
            )


class SchoolViewSet(viewsets.ModelViewSet):
    """
	API endpoint that allows BlogpostContents to be viewed or edited.
	"""
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

    def get_queryset(self):
        result = School.objects.all()
        queried_name = self.request.query_params.get('name', None)
        if queried_name is not None:
            result = result.filter(name=queried_name)
        return result
