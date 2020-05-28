from rest_framework.test import APITestCase
from rest_framework.views import status
from api.application_form.models import ApplicationForm
from api.application_form.serializers import ApplicationFormSerializer


class ApplicationFormViewSetTest(APITestCase):
    def setUp(self):
        ApplicationForm.objects.create(
            first_name="Bobby",
            last_name="Bass",
            gender="M",
            nationality="USA",
            location="USA",
            email="bbass@rocketmail.com",
            phone="18002254452"
        )

    def test_post_application_form(self):
        self.client.post("/api/v1/applicationForms/", {
            "first_name": "Krikor",
            "last_name": "Ailanjian",
            "gender": "M",
            "nationality": "USA",
            "location": "USA",
            "email": "kailanjian@gmail.com",
            "phone": "6268251906"
        })

        self.assertEqual(2, len(ApplicationForm.objects.all()))

    def test_get_application_form(self):
        response = self.client.get("/api/v1/applicationForms/")

        expected = ApplicationForm.objects.all()
        serialized = ApplicationFormSerializer(expected, many=True)
        self.assertEqual(response.data['results'], serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
