# Generated by Django 4.1.7 on 2023-03-13 22:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Connect', '0010_gitissue_pda'),
    ]

    operations = [
        migrations.CreateModel(
            name='GitWebhook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('github_id', models.IntegerField(blank=True, null=True)),
                ('lamports', models.IntegerField(blank=True, null=True)),
                ('minimum_date', models.DateTimeField(blank=True, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('pda', models.CharField(blank=True, max_length=256, null=True)),
                ('repository', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Connect.gitrepository')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]