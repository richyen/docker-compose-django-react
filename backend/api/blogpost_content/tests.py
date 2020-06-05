from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from api.blogpost.models import Blogpost
from api.authentication.models import User
from api.blogpost_content.models import BlogpostContent
from api.blogpost_content.serializers import BlogpostContentSerializer


class BaseViewTest(APITestCase):

    client = APIClient()

    @staticmethod
    def create_blogpost(media_url="", author=None, is_featured=False):
        if True:  # media_link should be optional
            Blogpost.objects.create(media_url=media_url, author=author, is_featured=is_featured)

    @staticmethod
    def create_blogpost_content(
            language="en",
            blogpost=None,
            title_content="",
            body_content="",
            is_draft=False
    ):
        if blogpost:
            BlogpostContent.objects.create(language=language,
                                           blogpost=blogpost,
                                           title_content=title_content,
                                           body_content=body_content)

    def setUp(self):
        # add test data
        self.user = User.objects.create_user(username="test",
                                             email="test@gmail.com",
                                             password="password")
        self.profile = self.user.profile
        self.create_blogpost(media_url="youtube.com", author=self.profile)
        valid_blogpost = Blogpost.objects.get(author=self.profile)
        self.created_blog_id = valid_blogpost.id
        self.create_blogpost_content("en", valid_blogpost, "title", "body content")
        self.create_blogpost_content(
            "cn",
            valid_blogpost,
            "zhongwentitle",
            "zhe shi zhongwenbodycontent")


class GetAllBlogpostContentsTest(BaseViewTest):

    def test_get_all_blogpost_contents(self):
        """
        This test ensures that all songs added in the setUp method
        exist when we make a GET request to the songs/ endpoint
        """
        # hit the API endpoint
        response = self.client.get(
            reverse("blogpostcontent-list", kwargs={"version": "v1"})
        )
        # fetch the data from db
        expected = BlogpostContent.objects.all()
        serialized = BlogpostContentSerializer(expected, many=True)
        self.assertEqual(response.data['results'], serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class GetByQueryParamTest(BaseViewTest):
    def setUp(self):
        # add test data
        self.user = User.objects.create_user(username="test",
                                             email="test@gmail.com",
                                             password="password")
        self.profile = self.user.profile
        self.create_blogpost(media_url="youtube.com", author=self.profile, is_featured=False)
        valid_blogpost = Blogpost.objects.get(author=self.profile)
        self.created_blog_id = valid_blogpost.id
        self.bpc1 = BlogpostContent.objects.create(
            language="en",
            blogpost=valid_blogpost,
            title_content="title",
            body_content="body",
            is_draft=True,
        )
        self.bpc2 = BlogpostContent.objects.create(
            language="cn",
            blogpost=valid_blogpost,
            title_content="zhongwentitle",
            body_content="zhe shi zhongwenbodycontent",
            is_draft=False,
            publish_at="2020-01-02T15:40:00Z"
        )

    def test_incomplete_match(self):
        """
        This test ensures that even if a query is not a complete title or body
        content a match will occur (even if the query is not a full word).
        :return:
        """
        response = self.client.get("/api/v1/blogpostcontent/", {'query': 'zhongwe'}, format='json')
        expected = BlogpostContent.objects.get(pk=self.bpc2.id)
        serialized = BlogpostContentSerializer(expected)
        self.assertEqual(response.data['results'][0], serialized.data)

    def test_published_only(self):
        """
        Tests filtering out drafts.
        :return: nothing
        """
        response = self.client.get("/api/v1/blogpostcontent/", {'published': 'true'}, format='json')
        expected = BlogpostContent.objects.get(pk=self.bpc2.id)
        serialized = BlogpostContentSerializer(expected)
        self.assertEqual(response.data['results'][0], serialized.data)
        self.assertEqual(len(response.data['results']), 1)

    def test_featured_only(self):
        """
        Tests filtering out drafts.
        :return: nothing
        """
        response = self.client.get("/api/v1/blogpostcontent/", {'featured': 'true'}, format='json')
        self.assertEqual(len(response.data['results']), 0)
