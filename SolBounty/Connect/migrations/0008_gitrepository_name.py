# Generated by Django 4.1.7 on 2023-03-13 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Connect', '0007_gitissue_minimum_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='gitrepository',
            name='name',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
