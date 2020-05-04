from django.test import TestCase
from datetime import date

# Create your tests here.
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Blogpost
from .serializers import BlogpostSerializer

# tests for views


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_blogpost(media_url="", author_id=1, posted_on=date.today()):
        if True: #media_link should be optional
            Blogpost.objects.create(media_url=media_url, author_id=author_id, posted_on=posted_on)

    def setUp(self):
        # add test data
        self.create_blogpost("youtube.com", 1, date.today())
        self.create_blogpost( "youtube.com", 2, date.today())
        self.create_blogpost("youtube.com", 3, date.today())
        self.create_blogpost("media_url", 4, date.today())


class GetAllBlogpostsTest(BaseViewTest):

    def test_get_all_blogposts(self):
        """
        This test ensures that all songs added in the setUp method
        exist when we make a GET request to the songs/ endpoint
        """
        # hit the API endpoint
        response = self.client.get(
            reverse("blogposts-all", kwargs={"version": "v1"})
        )
        # fetch the data from db
        expected = Blogpost.objects.all()
        serialized = BlogpostSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)