from django.db import models

# Create your models here.
class School(models.Model):
    name = models.CharField(max_length=40, null=False)
    profile_picture_url = models.CharField(max_length=100, null=True)
    page_description = models.TextField(blank=True) # for showing on the school page
    # mentors = models.ManyToManyField("Mentor") # TODO: uncomment this when Mentors table get merged in
    # for now, just assume only one school per applicant, so we don't have to make a many to many field here

    def __str__(self):
        return "{} - {}".format(self.id, self.name)

