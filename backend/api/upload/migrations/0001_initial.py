# Generated by Django 3.0.5 on 2020-05-26 05:52

import api.upload.storage_backends
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Upload',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
                ('file', models.FileField(storage=api.upload.storage_backends.PublicMediaStorage(), upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='UploadPrivate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
                ('file', models.FileField(storage=api.upload.storage_backends.PrivateMediaStorage(), upload_to='')),
            ],
        ),
    ]
