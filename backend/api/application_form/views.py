from rest_framework import viewsets
from api.application_form.serializers import ApplicationFormSerializer
from api.application_form.models import ApplicationForm

class ApplicationFormViewSet(viewsets.ModelViewSet):
    queryset = ApplicationForm.objects.all()
    serializer_class = ApplicationFormSerializer
