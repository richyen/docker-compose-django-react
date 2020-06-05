from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from api.mentor.models import Mentor


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_mentor(mentor_id=100, picture_url="", user_id=100):
        Mentor.objects.create(mentor_id=mentor_id, picture_url=picture_url, user_id=user_id)

    def setUp(self):
        self.create_mentor(1, "", 1)
        self.create_mentor(2, "", 2)


class GetAllMentorsTest(BaseViewTest):

    def test_get_all_mentors(self):
        response = self.client.get(
            reverse("mentors-all", kwargs={"version": "v1"})
        )
        expected = Mentor.objects.all()
        self.assertEqual(response.data, expected)
