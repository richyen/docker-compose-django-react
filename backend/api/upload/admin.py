from django.contrib import admin
from api.upload.models import Upload
"""
This registers upload with the admin site.
"""

# Register your models here.
admin.site.register(Upload)
