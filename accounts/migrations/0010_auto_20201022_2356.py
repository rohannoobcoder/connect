# Generated by Django 3.0.6 on 2020-10-22 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_auto_20201018_1959'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='aboutme',
            field=models.TextField(blank=True, null=True),
        ),
    ]
