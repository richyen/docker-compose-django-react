from django.db import models
from tinymce import models as tinymce_models
from api.profiles.models import Profile
from api.blogpost.models import Blogpost
from datetime import date
from django.utils import timezone


# Create your models here.
class BlogpostContent(models.Model):
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
    is_published = models.BooleanField(default=True)
    is_draft = models.BooleanField(default=True)

    def __str__(self):
        return "{} - {} - {} - {} - {} - {}".format(self.id,
                                                    self.language,
                                                    self.blogpost_id,
                                                    self.title_content,
                                                    self.body_content,
                                                    self.is_published,
                                                    self.is_draft,
                                                    self.last_updated,
                                                    self.created_at,
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
        instance.save()
        return instance

    def save(self, *args, **kwargs):  # pylint: disable=signature-differs
        if self.blogpost is None:
            # TODO: have this come from the request once we
            #  work out the auth flow
            self.blogpost = Blogpost(author=Profile.objects.get(pk=1))
            self.blogpost.save()
        super(BlogpostContent, self).save(*args, **kwargs)
