from django.db import models


class Blogpost(models.Model):
    class Meta:
        ordering = ['-id']

    media_url = models.CharField(max_length=200, blank=True)
    author = models.ForeignKey(
        'profiles.Profile', on_delete=models.CASCADE, related_name='blogpost', default=1
    )
    slug = models.SlugField(max_length=255)
    is_featured = models.BooleanField(default=False)

    def __str__(self):

        return "{} - {} - {} - {}".format(
            self.id,
            self.media_url,
            self.author,
            self.slug)

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
    class Meta:
        ordering = ['-id']
    name = models.CharField(max_length=100)
    blogpost = models.ManyToManyField(Blogpost, blank=True)

    def __str__(self):
        return "{} - {}".format(self.id, self.name)


class Topic(models.Model):
    class Meta:
        ordering = ['-id']
    name = models.CharField(max_length=100)
    blogpost = models.ManyToManyField(Blogpost, blank=True)

    def __str__(self):
        return "{} - {}".format(self.id, self.name)
