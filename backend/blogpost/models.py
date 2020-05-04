from django.db import models

# Create your models here.
class Blogpost(models.Model):
	# title = models.CharField(max_length=255, null=False)
	# body = models.CharField(max_length=1000, null=False)
	media_url = models.CharField(max_length=200, null=True)
	# TODO: when users table is created, make this a foreign key
	author_id = models.IntegerField(null=False) # eventually this will be linked to the users table
	posted_on = models.DateField(null=False)
	last_updated = models.DateField(null=False, auto_now=True)

	def __str__(self):
		return "{} - {} - {} - {}".format(self.media_url, self.author_id, self.posted_on, self.last_updated)