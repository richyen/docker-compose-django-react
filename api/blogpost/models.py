from django.db import models

# Create your models here.
class Blogposts(models.Model):
	title = models.CharField(max_length=255, null=False)
	body = models.CharField(max_length=1000, null=False)
	media_url = models.CharField(max_length=200, null=True)
	author_id = models.IntegerField(null=False) # eventually this will be linked to the users table
	posted_on = models.DateField(null=False)
    last_updated = models.DateField(null=False, auto_now=True)

	def __str__(self):
		return "{} - {} - {} - {} - {}".format(self.title, self.body, self.media_url, self.author_id, self.posted_on, self.last_updated)