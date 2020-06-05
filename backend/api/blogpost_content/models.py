"""
This is the BlogpostContent. This is going to be the most common point
of interface for people using the API.
"""
from django.db import models
from tinymce import models as tinymce_models
from api.profiles.models import Profile
from api.blogpost.models import Blogpost


# Create your models here.
class BlogpostContent(models.Model):
    """
    This class is the content of the Blogposts. For the most part, interactions
    with the backend will be made through this class's API endpoint instead of
    the blogpost one.
    """
    class Meta:
        ordering = ['-id']

    # There will be a language code.
    language = models.CharField(max_length=10, null=False)
    blogpost = models.ForeignKey(
        Blogpost, related_name="blogpost", on_delete=models.CASCADE, null=True)
    title_content = models.CharField(max_length=200, null=False)
    body_content = tinymce_models.HTMLField()
    # models.TextField(null=False) # for now, I want the indicator for whether the
    # translation exists to be
    # whether the entry is in this table as opposed to whether or not the field is null.
    # A timestamp representing when this object was created.
    created_at = models.DateTimeField(auto_now_add=True)
    # A timestamp representing when this object was last updated.
    updated_at = models.DateTimeField(auto_now=True)
    publish_at = models.DateTimeField(null=True)  # to allow future publishing
    is_draft = models.BooleanField(default=True)

    def __str__(self):
        return "{} - {} - {} - {} - {} - {} - {} - {} - {}".format(
            self.id,
            self.language,
            self.blogpost,
            self.title_content,
            self.body_content,
            self.is_draft,
            self.updated_at,
            self.created_at,
            self.publish_at
        )

    def create(self, validated_data):
        """
        This creates a BlogpostContent
        :param validated_data:
        :return: the result of calling create on the validated data
        """
        return BlogpostContent.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        The replaces the default update function. The goal of this is so that
        if some fields are not included, then they will stay the same.
        :param instance:  the old object
        :param validated_data: the new data submitted
        :return: the newly saved object
        """
        instance.language = validated_data.get("language", instance.language)
        instance.blogpost = validated_data.get("blogpost", instance.blogpost)
        instance.title_content = validated_data.get(
            "title_content", instance.title_content)
        instance.body_content = validated_data.get(
            "body_content", instance.body_content)
        instance.is_draft = validated_data.get("is_draft", instance.is_draft)
        instance.publish_at = validated_data.get("publish_at", instance.publish_at)
        instance.save()
        return instance

    def save(self, *args, **kwargs):  # pylint: disable=signature-differs
        if self.blogpost is None:
            # TODO: have this come from the request once we
            #  work out the auth flow
            self.blogpost = Blogpost(author=Profile.objects.get(pk=1))
            self.blogpost.save()
        super(BlogpostContent, self).save(*args, **kwargs)
