from rest_framework import serializers
from api.application_form.models import ApplicationForm


class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationForm
        fields = [
            'first_name',
            'last_name',
            'gender',
            'nationality',
            'location',
            'email',
            'phone'
            ]
