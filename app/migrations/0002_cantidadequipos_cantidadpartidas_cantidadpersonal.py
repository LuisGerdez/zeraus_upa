# Generated by Django 3.1.4 on 2022-04-12 02:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CantidadPersonal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField(default=1)),
                ('partida', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='app.partidas')),
                ('personal', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='app.personal')),
            ],
            options={
                'verbose_name': 'CantidadPersonal',
                'verbose_name_plural': 'CantidadPersonal',
            },
        ),
        migrations.CreateModel(
            name='CantidadPartidas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField(default=1)),
                ('obra', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='app.obras')),
                ('partida', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='app.partidas')),
            ],
            options={
                'verbose_name': 'CantidadPartidas',
                'verbose_name_plural': 'CantidadPartidas',
            },
        ),
        migrations.CreateModel(
            name='CantidadEquipos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField(default=1)),
                ('equipo', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='app.equipos')),
                ('partida', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='app.partidas')),
            ],
            options={
                'verbose_name': 'CantidadEquipos',
                'verbose_name_plural': 'CantidadEquipos',
            },
        ),
    ]
