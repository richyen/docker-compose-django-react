from django.db import models

# Create your models here.
class Mentors(models.Model):
    # TODO: auto-increment?
    mentor_id = models.IntegerField(null=False)
    picture_url = models.CharField(max_length=200, null=True)
    user_id = models.IntegerField(null=False)

    def __str__(self):
        return "{} - {} - {}".format(self.mentor_id, self.picture_url, self.user_id)

    def create(self, validated_data):
        return Mentors.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.save()
        return instance

    def save(self, *args, **kwargs):
        super(Mentors, self).save(*args, **kwargs)