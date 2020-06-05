from django.db import models


class Mentor(models.Model):
    class Meta:
        ordering = ['-id']

    # TODO: auto-increment?
    picture_url = models.CharField(max_length=200, null=True)
    user_id = models.IntegerField(null=False)

    def __str__(self):
        return "{} - {} - {}".format(self.id, self.picture_url, self.user_id)

    def create(self, validated_data):
        return Mentor.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.save()
        return instance

    def save(self, *args, **kwargs):
        super(Mentor, self).save(*args, **kwargs)
