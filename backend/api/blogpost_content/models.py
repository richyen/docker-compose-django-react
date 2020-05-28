from django.db import models
from django.apps import apps
from django.contrib import admin
from api.blogpost.models import Blogpost
from tinymce import models as tinymce_models


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
    # models.TextField(null=False) # for now, I want the indicator for whether the translation exists to be
    # whether the entry is in this table as opposed to whether or not the field is null.
    last_updated = models.DateField(null=False, auto_now=True)

    def __str__(self):
        return "{} - {} - {} - {} - {} - {}".format(self.id, self.language, self.blogpost_id, self.title_content, self.body_content, self.last_updated)

    def create(self, validated_data):
        return BlogpostContent.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.language = validated_data.get("language", instance.language)
        instance.blogpost = validated_data.get("blogpost", instance.blogpost)
        instance.title_content = validated_data.get(
            "title_content", instance.title_content)
        instance.body_content = validated_data.get(
            "body_content", instance.body_content)
        instance.save()
        return instance

    def save(self, *args, **kwargs):
        if self.blogpost is None:
            self.blogpost = Blogpost()  # TODO: change this later once we implement authors
            self.blogpost.save()
        super(BlogpostContent, self).save(*args, **kwargs)
