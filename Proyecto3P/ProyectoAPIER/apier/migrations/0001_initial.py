# Generated by Django 4.1.3 on 2022-11-18 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mes', models.CharField(max_length=50)),
                ('Nodepersonasenfermas', models.FloatField()),
                ('decesos', models.FloatField()),
            ],
        ),
    ]
