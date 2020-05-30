from django.shortcuts import render
from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response

from .models import Mentor
from .serializers import MentorSerializer

# Create your views here.
class ListMentorsView(generics.ListAPIView):
    queryset = Mentor.objects.all()
    serializer_class = MentorSerializer

class MentorDetailView(generics.ListAPIView):
    queryset = Mentor.objects.all()

    def get(self, request, *args, **kwargs):
        try:
            a_mentor = self.queryset.get(pk=kwargs["pk"])
            return Response(MentorSerializer(a_mentor).data)
        except Mentor.DoesNotExist:
            return Response (
                data={
                    "message": "Mentor with id: {} does not exist".format(kwargs["pk"])
                },
                status=status.HTTP_404_NOT_FOUND
            )