from datetime import date
from django.db import models


class Blogpost(models.Model):
    class Meta:
        ordering = ['-id']

    # title = models.CharField(max_length=255, null=False)
    # body = models.CharField(max_length=1000, null=False)
    # we may not use this and instead use embeddings in the
    media_url = models.CharField(max_length=200, blank=True)
    # text of the blogpost
    author = models.ForeignKey(
        'profiles.Profile', on_delete=models.CASCADE, related_name='blogpost', default= 1
    )
    slug = models.SlugField(db_index=True, max_length= 255, unique= True, default="slug")
    category = models.CharField(max_length=255, null= True)
    posted_on = models.DateField(null=True)
    last_updated = models.DateField(null=False, auto_now=True)

    def __str__(self):

        return "{} - {} - {} - {} - {}".format(self.id,
                                               self.media_url,
                                               self.author,
                                               self.category,
                                               self.slug,
                                               self.posted_on,
                                               self.last_updated)

    def create(self, validated_data):
        return Blogpost.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.media_url = validated_data.get("media_url", instance.media_url)
        instance.author = validated_data.get("author", instance.author)
        instance.category = validated_data.get("category", instance.category)
        instance.slug = validated_data.get("slug", instance.slug)
        instance.posted_on = validated_data.get(
            "posted_on", instance.title_content)
        instance.save()
        return instance

    def save(self, *args, **kwargs):
        if self.posted_on is None:
            self.posted_on = date.today()
        super(Blogpost, self).save(*args, **kwargs)


class Tag(models.Model):
    class Meta:
        ordering = ['-id']
    name = models.CharField(max_length=100)
    blogpost = models.ManyToManyField(Blogpost, blank=True)

    def __str__(self):
        return "{} - {}".format(self.id, self.name)
