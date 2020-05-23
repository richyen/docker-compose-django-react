from django.test import TestCase
from datetime import date

# Create your tests here.
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Blogpost, Tag
from .serializers import BlogpostSerializer, TagSerializer

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
        self.create_blogpost("youtube.com", 3, None)
        self.create_blogpost("media_url", 4, date.today())


class GetAllBlogpostsTest(BaseViewTest):

    def test_get_all_blogposts(self):
        # hit the API endpoint
        response = self.client.get(
            reverse("blogpost-list", kwargs={"version": "v1"})
        )
        # fetch the data from db
        expected = Blogpost.objects.all()
        serialized = BlogpostSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class GetBlogpostsByTagTest(APITestCase):
    def setUp(self):
        self.blogpost_1 = Blogpost.objects.create(author_id=1, posted_on=date.today())
        self.blogpost_2 = Blogpost.objects.create(author_id=2, posted_on=date.today())
        self.blogpost_3 = Blogpost.objects.create(author_id=3, posted_on=date.today())

        self.tag_1 = Tag.objects.create(name="everything")
        self.tag_2 = Tag.objects.create(name="something")

        self.tag_1.blogpost.set([self.blogpost_2, self.blogpost_1, self.blogpost_3])
        self.tag_2.blogpost.set([self.blogpost_1])
    
    def test_get_blogposts_for_tag(self):
        response = self.client.get("/api/v1/blogpost/?tag_id={}".format(self.tag_1.id))
        expected = Blogpost.objects.all()
        serialized = BlogpostSerializer(expected, many=True)


        self.assertEqual(response.data, serialized.data)

        response = self.client.get("/api/v1/blogpost/?tag_id={}".format(self.tag_2.id))
        expected = Blogpost.objects.get(pk=self.blogpost_1.id)
        serialized = BlogpostSerializer(expected)

        self.assertEqual(response.data[0], serialized.data)


class TagViewSetTest(APITestCase):
    def setUp(self):
        self.blogpost_1 = Blogpost.objects.create(author_id=1, posted_on=date.today())
        self.blogpost_2 = Blogpost.objects.create(author_id=2, posted_on=date.today())
        self.blogpost_3 = Blogpost.objects.create(author_id=3, posted_on=date.today())

        self.tag_1 = Tag.objects.create(name="everything")
        self.tag_2 = Tag.objects.create(name="something")
        self.tag_3 = Tag.objects.create(name="funny")

        self.tag_1.blogpost.set([self.blogpost_2, self.blogpost_1, self.blogpost_3])
        self.tag_2.blogpost.set([self.blogpost_1])

    def test_get_all_tags(self):
        response = self.client.get("/api/v1/tag/")

        expected = Tag.objects.all()
        serialized = TagSerializer(expected, many=True)

        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_tag(self):
        self.assertEqual(len(Tag.objects.all()), 3)

        response = self.client.post("/api/v1/tag/", 
        {
            "name": "new",
            "blogpost": [self.blogpost_1.id]
        })
    
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(4, len(Tag.objects.all()))
