from django.conf.urls import url
from .views import (image_upload, UploadAPIView)

urlpatterns = [
    url(r'^gui$', image_upload, name='upload'),
    url(r'^api', UploadAPIView.as_view())
]
