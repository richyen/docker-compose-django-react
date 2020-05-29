from django.db import models
from django.core.validators import RegexValidator
from datetime import datetime


class ApplicationForm(models.Model):
    class Meta:
        ordering = ['-id']

    gender_choices = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    grade_level_choices = (
        ('high_school', 'High School'),
        ('undergraduate', 'Undergraduate'),
        ('exchange', 'Exchange Student'),
        ('transfer', 'Transfer Student'),
        ('graduate', 'Graduate Student'),
    )
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="""
Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.
""")
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    preferred_name = models.CharField(max_length=100, blank=True)
    birth_date = models.DateTimeField(max_length=100)
    gender = models.CharField(max_length=1, choices=gender_choices)
    country_of_origin = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(validators=[phone_regex], max_length=17)
    grade_level = models.CharField(max_length=20, choices=grade_level_choices)
    school_name = models.CharField(max_length=100)
    school_city = models.CharField(max_length=100)
    school_state = models.CharField(max_length=100)
    school_country = models.CharField(max_length=100)
    destination_school = models.CharField(max_length=100, blank=True)
    major = models.CharField(max_length=100)
    # TODO: we chat??
    referral = models.CharField(max_length=100)
    topics_of_interest = models.CharField(max_length=300, blank=True) # choose 3 topics you're interested in, not required for now
    goals = models.CharField(max_length=100) # what would you like to gain or learn from ISMP?
    additional_input = models.CharField(max_length=100, blank=True) # questions/comments

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)
