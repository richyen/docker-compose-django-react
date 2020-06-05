from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from api.authentication.models import User
from api.blogpost.models import Blogpost, Tag, Topic
from api.blogpost.serializers import BlogpostSerializer, TagSerializer, TopicSerializer


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_blogpost(media_url="", author=None):
        Blogpost.objects.create(media_url=media_url, author=author)

    def setUp(self):
        # add test data
        self.user = User.objects.create_user(username="test",
                                             email="test@gmail.com",
                                             password="password")
        self.profile = self.user.profile
        self.create_blogpost("youtube.com", self.profile)
        self.create_blogpost("youtube.com", self.profile)
        self.create_blogpost("youtube.com", self.profile)
        self.create_blogpost("media_url", self.profile)


class GetAllBlogpostsTest(BaseViewTest):
    def test_get_all_blogposts(self):
        # hit the API endpoint
        response = self.client.get(
            reverse("blogpost-list", kwargs={"version": "v1"})
        )
        # fetch the data from db
        expected = Blogpost.objects.all()
        serialized = BlogpostSerializer(expected, many=True)
        self.assertEqual(response.data['results'], serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class GetBlogpostsByTagTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="test",
                                             email="test@gmail.com",
                                             password="password")
        self.profile = self.user.profile

        self.blogpost_1 = Blogpost.objects.create(author=self.profile)
        self.blogpost_2 = Blogpost.objects.create(author=self.profile)
        self.blogpost_3 = Blogpost.objects.create(author=self.profile)

        self.tag_1 = Tag.objects.create(name="everything")
        self.tag_2 = Tag.objects.create(name="something")

        self.tag_1.blogpost.set([self.blogpost_2, self.blogpost_1, self.blogpost_3])
        self.tag_2.blogpost.set([self.blogpost_1])

    def test_get_blogposts_for_tag(self):
        response = self.client.get("/api/v1/blogpost/?tag_id={}".format(self.tag_1.id))
        expected = Blogpost.objects.all()
        serialized = BlogpostSerializer(expected, many=True)
        self.assertEqual(response.data['results'], serialized.data)

        response = self.client.get("/api/v1/blogpost/?tag_id={}".format(self.tag_2.id))
        expected = Blogpost.objects.get(pk=self.blogpost_1.id)
        serialized = BlogpostSerializer(expected)
        self.assertEqual(response.data['results'][0], serialized.data)


class TagViewSetTest(APITestCase):
    # Set up data
    def setUp(self):
        self.user = User.objects.create_user(username="test",
                                             email="test@gmail.com",
                                             password="password")
        self.profile = self.user.profile

        self.blogpost_1 = Blogpost.objects.create(author=self.profile)
        self.blogpost_2 = Blogpost.objects.create(author=self.profile)
        self.blogpost_3 = Blogpost.objects.create(author=self.profile)

        self.tag_1 = Tag.objects.create(name="everything")
        self.tag_2 = Tag.objects.create(name="something")
        self.tag_3 = Tag.objects.create(name="funny")

        self.tag_1.blogpost.set([self.blogpost_2, self.blogpost_1, self.blogpost_3])
        self.tag_2.blogpost.set([self.blogpost_1])

    # Test tag retrieval (all tags)
    def test_get_all_tags(self):
        response = self.client.get("/api/v1/tag/")
        expected = Tag.objects.all()
        serialized = TagSerializer(expected, many=True)
        self.assertEqual(response.data['results'], serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # Test tag creation
    def test_post_tag(self):
        self.assertEqual(len(Tag.objects.all()), 3)
        response = self.client.post("/api/v1/tag/",
                                    {
                                        "name": "new",
                                        "blogpost": [self.blogpost_1.id]
                                    })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(4, len(Tag.objects.all()))


class TopicViewSetTest(APITestCase):
    # Set up data
    def setUp(self):
        self.user = User.objects.create_user(username="test",
                                             email="test@gmail.com",
                                             password="password")
        self.profile = self.user.profile

        self.blogpost_1 = Blogpost.objects.create(author=self.profile)
        self.blogpost_2 = Blogpost.objects.create(author=self.profile)
        self.blogpost_3 = Blogpost.objects.create(author=self.profile)

        self.topic_1 = Topic.objects.create(name="everything")
        self.topic_2 = Topic.objects.create(name="something")
        self.topic_3 = Topic.objects.create(name="funny")

        self.topic_1.blogpost.set([self.blogpost_2, self.blogpost_1, self.blogpost_3])
        self.topic_2.blogpost.set([self.blogpost_1])

    # Test tag retrieval (all tags)
    def test_get_all_topics(self):
        response = self.client.get("/api/v1/topic/")
        expected = Topic.objects.all()
        serialized = TopicSerializer(expected, many=True)
        self.assertEqual(response.data['results'], serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # Test tag creation
    def test_post_topic(self):
        self.assertEqual(len(Topic.objects.all()), 3)
        response = self.client.post("/api/v1/topic/",
                                    {
                                        "name": "new",
                                        "blogpost": [self.blogpost_1.id]
                                    })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(4, len(Topic.objects.all()))
