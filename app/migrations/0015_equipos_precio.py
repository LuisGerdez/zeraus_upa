# Generated by Django 3.1.4 on 2022-05-03 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_materiales_precio'),
    ]

    operations = [
        migrations.AddField(
            model_name='equipos',
            name='precio',
            field=models.FloatField(default=0),
        ),
    ]
