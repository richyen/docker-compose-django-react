from django.db import models
from datetime import date

# Create your models here.
class Blogpost(models.Model):
	# title = models.CharField(max_length=255, null=False)
	# body = models.CharField(max_length=1000, null=False)
	media_url = models.CharField(max_length=200, blank=True) #we may not use this and instead use embeddings in the
	# text of the blogpost
	# TODO: when users table is created, make this a foreign key
	author =  models.ForeignKey(
		'profiles.Profile', on_delete=models.CASCADE, related_name='blogpost'
	)
	posted_on = models.DateField(null=True)
	last_updated = models.DateField(null=False, auto_now=True)

	def __str__(self):
		return "{} - {} - {} - {} - {}".format(self.id, self.media_url, self.author_id, self.posted_on, self.last_updated)

	def create(self, validated_data):
		return Blogpost.objects.create(**validated_data)

	def update(self, instance, validated_data):
		instance.media_url = validated_data.get("media_url", instance.language)
		instance.author = validated_data.get("author", instance.blogpost)
		instance.posted_on = validated_data.get("posted_on", instance.title_content)
		instance.save()
		return instance

	def save(self, *args, **kwargs):
		if self.posted_on is None:
			self.posted_on = date.today()
		super(Blogpost, self).save(*args, **kwargs)

class Tag(models.Model):
	name = models.CharField(max_length=100)
	blogpost = models.ManyToManyField(Blogpost, blank=True)

	def __str__(self):
		return "{} - {}".format(self.id, self.name)