# Generated by Django 3.0.6 on 2020-10-18 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_auto_20201015_1115'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='profile_pic',
            field=models.ImageField(default='/profile_pic/default.png', null=True, upload_to='profile_pic'),
        ),
    ]
