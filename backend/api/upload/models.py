from django.db import models
from api.upload.storage_backends import PublicMediaStorage, PrivateMediaStorage

# Create your models here.

"""
These models are used for uploading files and only differ in the privacy of the upload.
"""


class Upload(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(storage=PublicMediaStorage())


class UploadPrivate(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(storage=PrivateMediaStorage())
