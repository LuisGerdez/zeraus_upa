# Generated by Django 3.1.4 on 2022-05-08 12:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0019_auto_20220508_1215'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='obras',
            options={'permissions': (('view_presupuesto', 'Ver presupuestos'), ('change_presupuesto', 'Modificar presupuestos'), ('report_presupuesto', 'Ver reportes de presupuestos')), 'verbose_name': 'Obra', 'verbose_name_plural': 'Obras'},
        ),
    ]
