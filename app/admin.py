from django.contrib import admin
from .models import User, Areas, Equipos, Materiales, Personal, Partidas, Obras, PrecioMateriales, PrecioEquipos, PrecioPersonal, CantidadEquipos, CantidadMateriales, CantidadPersonal, CantidadPartidas

# Register your models here.
admin.site.register(User)
admin.site.register(Areas)
admin.site.register(Equipos)
admin.site.register(Materiales)
admin.site.register(Personal)
admin.site.register(Partidas)
admin.site.register(Obras)
admin.site.register(PrecioMateriales)
admin.site.register(PrecioEquipos)
admin.site.register(PrecioPersonal)
admin.site.register(CantidadMateriales)
admin.site.register(CantidadEquipos)
admin.site.register(CantidadPersonal)
admin.site.register(CantidadPartidas)