from mailchimp3 import MailChimp
from rest_framework import viewsets, views
from rest_framework.response import Response
from django.conf import settings
from api.application_form.serializers import ApplicationFormSerializer
from api.application_form.models import ApplicationForm


class ApplicationFormViewSet(viewsets.ModelViewSet):
    """
    The ViewSet for the ApplicationForm.
    """
    queryset = ApplicationForm.objects.all()
    serializer_class = ApplicationFormSerializer


class SubscribeNewsletterView(views.APIView):
    """
    This view handles subscribing to the newsletter.
    """
    permission_classes = []

    def post(self, request, *args, **kwargs):
        if not settings.USE_MAILCHIMP:
            return Response({
                "status": "error",
                "error": "Mailchimp is currently disabled."
            })
        new_user_data = {
            'email_address': request.data['email'],
            'status': 'subscribed',
            'tags': ['newsletter']
        }
        mailchimp_client = MailChimp(
            settings.MAILCHIMP_API_KEY,
            settings.MAILCHIMP_USERNAME)

        # add the new user to the mailchimp list
        try:
            mailchimp_client.lists.members.create(
                settings.MAILCHIMP_LIST_ID,
                new_user_data)
            return Response({
                "status": "success",
                "request": str(new_user_data)
            })
        # TODO: Look into best practices for returning errors.
        except ValueError as value_error:
            return Response({
                "status": "error",
                "error": str(value_error)
            })
        except Exception as e:
            if e.args[0].get('title') == "Member Exists":
                error_msg = "Email is already subscribed to newsletter."
            else:
                error_msg = "Unknown error. Please try again later."
            return Response({
                "status": "error",
                "error": error_msg
            })
