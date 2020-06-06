"""
This module contains Blogpost, Topic, and Tag models.
"""
from django.db import models

class Blogpost(models.Model):
    """
    This is the blogpost model. This goes hand in hand with the blogpostcontent model.
    The reason for the split is that in the future, a blogpost will be able to be
    associated with multiple blogpostcontent instances with different languages to allow
    easy association of translated content.
    """
    class Meta:
        ordering = ['-id']

    media_url = models.CharField(max_length=200, blank=True)
    author = models.ForeignKey(
        'profiles.Profile', on_delete=models.CASCADE, related_name='blogpost', default=1
    )
    slug = models.SlugField(max_length=255)
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return "{} - {} - {} - {} - {}".format(
            self.id,
            self.media_url,
            self.author,
            self.slug,
            self.is_featured
        )

    def create(self, validated_data):
        return Blogpost.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.media_url = validated_data.get("media_url", instance.media_url)
        instance.author = validated_data.get("author", instance.author)
        instance.slug = validated_data.get("slug", instance.slug)
        instance.save()
        return instance

    def save(self, *args, **kwargs):
        super(Blogpost, self).save(*args, **kwargs)


class Tag(models.Model):
    """
    Tags can be set by authors when they create content. Unlike topics, tags can be
    created through the UI.
    """
    class Meta:
        ordering = ['-id']
    name = models.CharField(max_length=100)
    blogpost = models.ManyToManyField(Blogpost, blank=True)

    def __str__(self):
        return "{} - {}".format(self.id, self.name)


class Topic(models.Model):
    """
    The broad categories that ISMP material can be separated into. This is different
    from tags because topics will have a small set of items that authors cannot add
    to. This will be things like "english learning" or "adjusting to America" which
    will get highlighted as the main topics in the blog listing page.
    """
    class Meta:
        ordering = ['-id']
    name = models.CharField(max_length=100)
    blogpost = models.ManyToManyField(Blogpost, blank=True)

    def __str__(self):
        return "{} - {}".format(self.id, self.name)
