from django.test import TestCase
from datetime import date

# Create your tests here.
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Blogposts
from .serializers import BlogpostsSerializer

# tests for views


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_blogpost(title="", body="", media_url="", author_id=1, posted_on=date.today()):
        if title != "" and body != "": #media_link should be optional
            Blogposts.objects.create(title=title, body=body, media_url=media_url, posted_on=posted_on)

    def setUp(self):
        # add test data
        self.create_blogpost("5 dishes to try", "spaghetti spaghetti spaghetti spaghetti spaghetti", 1, date.today())
        self.create_blogpost("blatant clickbait", "find out more!", 2, date.today())
        self.create_blogpost("talking to americans", "bring up politics and religion right away!", 3, date.today())
        self.create_blogpost("title", "body", "media_url", 4, date.today())


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