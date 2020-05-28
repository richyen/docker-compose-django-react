from datetime import datetime
from django.shortcuts import render
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FileUploadParser
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Upload, UploadPrivate
from .serializers import UploadSerializer


def image_upload(request):
    """
    If it's a post, then upload the image or store it locally based on config. Otherwise, return
    the html of the upload.html template.
    """
    if request.method == 'POST':
        image_file = request.FILES['image_file']
        image_type = request.POST['image_type']
        if settings.USE_S3:
            if image_type == 'private':
                upload = UploadPrivate(file=image_file)
            else:
                upload = Upload(file=image_file)
            upload.save()
            image_url = upload.file.url
        else:
            filesystem_storage = FileSystemStorage()
            filename = filesystem_storage.save(image_file.name, image_file)
            image_url = filesystem_storage.url(filename)
        return render(request, 'upload.html', {
            'image_url': image_url
        })
    return render(request, 'upload.html')


class UploadAPIView(APIView):
    """
    Handles the API calls that try to upload files.
    """
    permission_classes = (AllowAny,)
    parser_classes = (MultiPartParser, FileUploadParser)
    serializer_class = UploadSerializer

    def post(self, request):
        """
        This will stick the file wherever the settings say to and then
        return the uploaded_at date and file url.
        """
        image_file = request.FILES['file']
        image_type = request.POST['image_type']
        if settings.USE_S3:
            print('about to upload')
            if image_type == 'private':
                upload = UploadPrivate(file=image_file)
            else:
                upload = Upload(file=image_file)
            upload.save()
            file_url = upload.file.url
            serializer = self.serializer_class(upload)
            response_data = serializer.data
        else:
            filesystem_storage = FileSystemStorage()
            filename = filesystem_storage.save(image_file.name, image_file)
            file_url = filesystem_storage.url(filename)
            response_data = {
                "file": file_url,
                "uploaded_at": datetime.now()
            }

        return Response(response_data, status=status.HTTP_200_OK)
