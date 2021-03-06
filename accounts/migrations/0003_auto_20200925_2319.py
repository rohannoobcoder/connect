# Generated by Django 3.0.6 on 2020-09-25 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_remove_account_bio'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='user',
        ),
        migrations.AddField(
            model_name='account',
            name='first_name',
            field=models.TextField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='account',
            name='last_name',
            field=models.TextField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='account',
            name='password',
            field=models.CharField(default='', max_length=32),
        ),
        migrations.AddField(
            model_name='account',
            name='username',
            field=models.TextField(default='', unique=True),
        ),
        migrations.AlterField(
            model_name='account',
            name='dob',
            field=models.DateField(default=''),
        ),
        migrations.AlterField(
            model_name='account',
            name='profile_pic',
            field=models.ImageField(upload_to='media/profile_pic/'),
        ),
    ]
