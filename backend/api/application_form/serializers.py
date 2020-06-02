from rest_framework import serializers
from api.application_form.models import ApplicationForm


class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationForm
        fields = '__all__'
