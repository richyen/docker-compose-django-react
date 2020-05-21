from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ApplicationFormSerializer
from .models import ApplicationForm

# Create your views here.
class ApplicationFormViewSet(viewsets.ModelViewSet):
  queryset = ApplicationForm.objects.all()
  serializer_class = ApplicationFormSerializer
