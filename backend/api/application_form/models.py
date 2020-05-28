from django.db import models
from django.core.validators import RegexValidator

# Create your models here.


class ApplicationForm(models.Model):
    class Meta:
        ordering = ['-id']

    gender_choices = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    phone_regex = RegexValidator(
        regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")

    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    gender = models.CharField(max_length=1, choices=gender_choices)
    nationality = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    phone = models.CharField(validators=[phone_regex], max_length=17)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)
