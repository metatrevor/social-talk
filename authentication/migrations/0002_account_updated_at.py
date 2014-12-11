# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):
    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 10, 8, 3, 49, 320457, tzinfo=utc),
                                       verbose_name='account last updated', auto_now=True),
            preserve_default=False,
        ),
    ]
