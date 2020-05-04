from django.db import models
from django.apps import apps
from django.contrib import admin
from api.blogpost.models import Blogpost


# Create your models here.
class BlogpostContent(models.Model):
    language = models.CharField(max_length=10, null=False) # There will be a language code.
    blogpost = models.ForeignKey(Blogpost, related_name="blogpost", on_delete=models.CASCADE, null=False)
    title_content = models.CharField(max_length=200, null=False)
    body_content = models.TextField(null=False) # for now, I want the indicator for whether the translation exists to be
    # whether the entry is in this table as opposed to whether or not the field is null.
    last_updated = models.DateField(null=False, auto_now=True)

    def __str__(self):
        return "{} - {} - {} - {} - {}".format(self.language, self.blogpost_id, self.title_content, self.body_content, self.last_updated)

# admin.site.register(BlogpostContent)
# Blogpost = apps.get_model('blogpost', 'Blogpost')
