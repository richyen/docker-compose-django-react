from django.test import TestCase
from rest_framework.reverse import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import School
from .serializers import SchoolSerializer

# Create your tests here.
class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_school(name="", profile_picture_url="", page_description=""):
        if True: #media_link should be optional
            School.objects.create(name=name,
                                    profile_picture_url=profile_picture_url,
                                    page_description=page_description)

    def setUp(self):
        # add test data
        self.create_school("UCSD", "", "this is UCSD")
        self.create_school("UCLA", "example.com/image.jpg", "this is UCLA")


class GetAllSchoolsTest(BaseViewTest):

    def test_get_all_schools(self):
        # hit the API endpoint
        response = self.client.get(
            reverse('school-list', kwargs={"version": "v1"})
        )
        # fetch the data from db
        expected = School.objects.all()
        serialized = SchoolSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
