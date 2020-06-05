from django.db import migrations, models
import api.upload.storage_backends


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Upload',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True,
                                        serialize=False,
                                        verbose_name='ID')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
                ('file', models.FileField(storage=api.upload.storage_backends.PublicMediaStorage(),
                                          upload_to='')),
            ],
        ),
        migrations.CreateModel(
            name='UploadPrivate',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True,
                                        serialize=False,
                                        verbose_name='ID')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
                ('file', models.FileField(storage=api.upload.storage_backends.PrivateMediaStorage(),
                                          upload_to='')),
            ],
        ),
    ]
