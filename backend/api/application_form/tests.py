from datetime import datetime
from rest_framework.test import APITestCase
from rest_framework.views import status
from api.application_form.models import ApplicationForm
from api.application_form.serializers import ApplicationFormSerializer


class ApplicationFormViewSetTest(APITestCase):
    def setUp(self):
        ApplicationForm.objects.create(
            first_name="Bobby",
            last_name="Bass",
            birth_date=datetime.now(),
            gender="M",
            country_of_origin='USA',
            email="bbass@rocketmail.com",
            phone="18002254452",
            grade_level="undergraduate",
            school_name="UCSD",
            school_city="La Jolla",
            school_state="California",
            school_country="USA",
            destination_school="Princeton",
            major="Science",
            referral="friend",
            goals="get better at english"
        )

    def test_post_application_form(self):
        self.client.post("/api/v1/applicationForms/", {
            "first_name": "Krikor",
            "last_name": "Ailanjian",
            "birth_date": "2020-05-07T01:05:00Z",
            "gender": "M",
            "country_of_origin": "USA",
            "email": "kailanjian@gmail.com",
            "phone": "6268251906",
            "grade_level": "undergraduate",
            "school_name": "UCSD",
            "school_city": "La Jolla",
            "school_state": "California",
            "school_country": "USA",
            "destination_school": "Princeton",
            "major": "Science",
            "referral": "friend",
            "goals": "get better at Chinese"
        })

        self.assertEqual(2, len(ApplicationForm.objects.all()))

    def test_get_application_form(self):
        response = self.client.get("/api/v1/applicationForms/")

        expected = ApplicationForm.objects.all()
        serialized = ApplicationFormSerializer(expected, many=True)
        self.assertEqual(response.data['results'], serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
