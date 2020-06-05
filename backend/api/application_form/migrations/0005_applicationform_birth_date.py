from datetime import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application_form', '0004_auto_20200529_0707'),
    ]

    operations = [
        migrations.AddField(
            model_name='applicationform',
            name='birth_date',
            field=models.DateTimeField(default=datetime.now(), max_length=100),
            preserve_default=False,
        ),
    ]
