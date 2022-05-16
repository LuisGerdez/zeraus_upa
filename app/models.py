from django.contrib.auth.models import AbstractUser, Permission
from django.db import models

# Insumos = Equipos, Materiales, Mano de Obra, Partidas

class User(AbstractUser):
	def getType(self):
		if self.is_superuser:
		    return "2"
		else:
		    return "1"

	def getPermissions(self):
		if self.is_superuser:
			return [p.codename for p in Permission.objects.all()]
		else:
			return [p.codename for p in self.user_permissions.all()]


class Areas(models.Model):
	codigo = models.CharField(max_length=3, primary_key=True)
	descripcion = models.TextField(default="", blank=True)
	tasa_dolar = models.FloatField(default=1, blank=True)

	class Meta:
		verbose_name = "Area"
		verbose_name_plural = "Areas"

	def serialize(self):
		return {
			"codigo": self.codigo,
			"descripcion": self.descripcion,
			"tasa_dolar": self.tasa_dolar
		}

	def __str__(self):
		return f"Area {self.codigo}"


class Equipos(models.Model):
	codigo = models.CharField(max_length=6, primary_key=True)
	descripcion = models.TextField(default="", blank=True)
	unidad = models.CharField(max_length=6, default="", blank=True)
	depreciacion = models.FloatField(default=0, blank=True, null=True)
	precio = models.FloatField(default=0, blank=False)

	class Meta:
		verbose_name = "Equipo"
		verbose_name_plural = "Equipos"

	def serialize(self):
		return {
			"codigo": self.codigo,
			"descripcion": self.descripcion,
			"unidad": self.unidad,
			"depreciacion": self.depreciacion,
			"precio": self.precio
		}

	def setPrice(self, area, precio):
		equipo_precio, created = PrecioEquipos.objects.get_or_create(equipo=self, area=area) 
		equipo_precio.precio = precio
		equipo_precio.save()

	def getPrice(self, area):
		try:
			equipo_precio = PrecioEquipos.objects.get(equipo=self, area=area)
			return equipo_precio.precio
		except PrecioEquipos.DoesNotExist:
			return 0

	def getPriceBs(self, area):
		return self.precio * area.tasa_dolar

	def setCantidad(self, partida, cant):
		equipo_cantidad, created = CantidadEquipos.objects.get_or_create(equipo=self, partida=partida) 
		equipo_cantidad.cantidad = cant
		equipo_cantidad.save()

	def getCantidad(self, partida):
		try:
			equipo_cantidad = CantidadEquipos.objects.get(equipo=self, partida=partida)
			return equipo_cantidad.cantidad
		except CantidadEquipos.DoesNotExist:
			return 0

	def __str__(self):
		return f"Equipo {self.codigo}"


class Materiales(models.Model):
	codigo = models.CharField(max_length=6, primary_key=True)
	cod_mat = models.CharField(max_length=6, default="", blank=True)
	descripcion = models.TextField(default="", blank=True)
	unidad = models.CharField(max_length=6, default="", blank=True)
	desperdicio = models.FloatField(default=0, blank=True)
	precio = models.FloatField(default=0, blank=False)

	class Meta:
		verbose_name = "Material"
		verbose_name_plural = "Materiales"

	def serialize(self):
		return {
			"codigo": self.codigo,
			"descripcion": self.descripcion,
			"unidad": self.unidad,
			"desperdicio": self.desperdicio,
			"precio": self.precio
		}

	def setPrice(self, area, precio):
		material_precio, created = PrecioMateriales.objects.get_or_create(material=self, area=area) 
		material_precio.precio = precio
		material_precio.save()

	def getPrice(self, area):
		try:
			material_precio = PrecioMateriales.objects.get(material=self, area=area)
			return material_precio.precio
		except PrecioMateriales.DoesNotExist:
			return 0

	def getPriceBs(self, area):
		return self.precio * area.tasa_dolar

	def setCantidad(self, partida, cant):
		material_cantidad, created = CantidadMateriales.objects.get_or_create(material=self, partida=partida) 
		material_cantidad.cantidad = cant
		material_cantidad.save()

	def getCantidad(self, partida):
		try:
			material_cantidad = CantidadMateriales.objects.get(material=self, partida=partida)
			return material_cantidad.cantidad
		except CantidadMateriales.DoesNotExist:
			return 0

	def __str__(self):
		return f"Material {self.codigo}"


class Personal(models.Model):
	codigo = models.CharField(max_length=6, primary_key=True)
	descripcion = models.TextField(default="", blank=True)
	unidad = models.CharField(max_length=6, default="", blank=True)
	precio = models.FloatField(default=0, blank=False)

	class Meta:
		verbose_name = "Personal"
		verbose_name_plural = "Personal"

	def serialize(self):
		return {
			"codigo": self.codigo,
			"descripcion": self.descripcion,
			"unidad": self.unidad,
			"precio": self.precio
		}

	def setPrice(self, area, precio):
		personal_precio, created = PrecioPersonal.objects.get_or_create(personal=self, area=area) 
		personal_precio.precio = precio
		personal_precio.save()

	def getPrice(self, area):
		try:
			personal_precio = PrecioPersonal.objects.get(personal=self, area=area)
			return personal_precio.precio
		except PrecioPersonal.DoesNotExist:
			return 0

	def getPriceBs(self, area):
		return self.precio * area.tasa_dolar

	def setCantidad(self, partida, cant):
		personal_cantidad, created = CantidadPersonal.objects.get_or_create(personal=self, partida=partida) 
		personal_cantidad.cantidad = cant
		personal_cantidad.save()

	def getCantidad(self, partida):
		try:
			personal_cantidad = CantidadPersonal.objects.get(personal=self, partida=partida)
			return personal_cantidad.cantidad
		except CantidadPersonal.DoesNotExist:
			return 0

	def __str__(self):
		return f"Personal {self.codigo}"


class Partidas(models.Model):
	codigo = models.CharField(max_length=6, primary_key=True)
	nombre = models.CharField(max_length=115, default="", blank=True)
	descripcion = models.TextField(default="", blank=True)
	unidad = models.CharField(max_length=6, default="", blank=True)
	rendimiento = models.FloatField(default=1, blank=True)

	materiales = models.ManyToManyField(Materiales, blank=True)
	equipos = models.ManyToManyField(Equipos, blank=True)
	personal = models.ManyToManyField(Personal, blank=True)

	def serialize(self):
		return {
			"codigo": self.codigo,
			"nombre": self.nombre,
			"descripcion": self.descripcion,
			"unidad": self.unidad,
			"rendimiento": self.rendimiento
		}

	class Meta:
		verbose_name = "Partida"
		verbose_name_plural = "Partidas"
		permissions = (
			("view_analisis", "Ver análisis de precio unitario"),
			("change_analisis", "Modificar análisis de precio unitario")
		)

	def setCantidad(self, obra, cant):
		obra_cantidad, created = CantidadPartidas.objects.get_or_create(partida=self, obra=obra) 
		obra_cantidad.cantidad = cant
		obra_cantidad.save()

	def getCantidad(self, obra):
		try:
			obra_cantidad = CantidadPartidas.objects.get(partida=self, obra=obra)
			return obra_cantidad.cantidad
		except CantidadPartidas.DoesNotExist:
			return 0

	def __str__(self):
		return f"Partida {self.codigo}"


class Obras(models.Model):
	codigo = models.CharField(max_length=9, primary_key=True)
	descripcion = models.TextField(default="", blank=True)
	area = models.ForeignKey(Areas, on_delete=models.SET_DEFAULT, default=None)
	bono_alimentacion = models.FloatField(default=0, blank=True)
	f_administracion = models.FloatField(default=0, blank=True)
	f_utilidad = models.FloatField(default=0, blank=True)
	grado_dificultad = models.FloatField(default=0, blank=True)
	tarifa_transporte = models.FloatField(default=0, blank=True)
	fcas = models.FloatField(default=0, blank=True)
	iva = models.FloatField(default=0, blank=True)

	partidas = models.ManyToManyField(Partidas, blank=True)

	def serialize(self):
		return {
			"codigo": self.codigo,
			"descripcion": self.descripcion,
			"area": self.area.codigo,
			"bono_alimentacion": self.bono_alimentacion,
			"f_administracion": self.f_administracion,
			"f_utilidad": self.f_utilidad,
			"grado_dificultad": self.grado_dificultad,
			"tarifa_transporte": self.tarifa_transporte,
			"fcas": self.fcas,
			"iva": self.iva,
		}

	class Meta:
		verbose_name = "Obra"
		verbose_name_plural = "Obras"
		permissions = (
			("view_presupuesto", "Ver presupuestos"),
			("change_presupuesto", "Modificar presupuestos"),
			("report_presupuesto", "Ver reportes de presupuestos"),
			("report_presupuesto_pdf", "Ver reportes de presupuestos en pdf"),
			("report_presupuesto_excel", "Ver reportes de presupuestos en excel")
		)


	def __str__(self):
		return f"Partida {self.codigo}"


class PrecioMateriales(models.Model):
	material = models.ForeignKey(Materiales, on_delete=models.CASCADE, blank=False)
	area = models.ForeignKey(Areas, on_delete=models.CASCADE, blank=False)
	precio = models.FloatField(default=0, blank=False)

	class Meta:
		verbose_name = "PrecioMateriales"
		verbose_name_plural = "PrecioMateriales"

	def __str__(self):
		return f"PrecioMateriales {self.id}"


class PrecioEquipos(models.Model):
	equipo = models.ForeignKey(Equipos, on_delete=models.CASCADE, blank=False)
	area = models.ForeignKey(Areas, on_delete=models.CASCADE, blank=False)
	precio = models.FloatField(default=0, blank=False)

	class Meta:
		verbose_name = "PrecioEquipos"
		verbose_name_plural = "PrecioEquipos"

	def __str__(self):
		return f"PrecioEquipos {self.id}"


class PrecioPersonal(models.Model):
	personal = models.ForeignKey(Personal, on_delete=models.CASCADE, blank=False)
	area = models.ForeignKey(Areas, on_delete=models.CASCADE, blank=False)
	precio = models.FloatField(default=0, blank=False)

	class Meta:
		verbose_name = "PrecioPersonal"
		verbose_name_plural = "PrecioPersonal"

	def __str__(self):
		return f"PrecioPersonal {self.id}"


class CantidadEquipos(models.Model):
	equipo = models.ForeignKey(Equipos, on_delete=models.CASCADE, default=None)
	partida = models.ForeignKey(Partidas, on_delete=models.CASCADE, default=None)
	cantidad = models.FloatField(default=1, blank=False)

	class Meta:
		verbose_name = "CantidadEquipos"
		verbose_name_plural = "CantidadEquipos"

	def __str__(self):
		return f"CantidadEquipos {self.id}"


class CantidadMateriales(models.Model):
	material = models.ForeignKey(Materiales, on_delete=models.CASCADE, default=None)
	partida = models.ForeignKey(Partidas, on_delete=models.CASCADE, default=None)
	cantidad = models.FloatField(default=1, blank=False)

	class Meta:
		verbose_name = "CantidadMateriales"
		verbose_name_plural = "CantidadMateriales"

	def __str__(self):
		return f"CantidadMateriales {self.id}"


class CantidadPersonal(models.Model):
	personal = models.ForeignKey(Personal, on_delete=models.CASCADE, default=None)
	partida = models.ForeignKey(Partidas, on_delete=models.CASCADE, default=None)
	cantidad = models.FloatField(default=1, blank=False)

	class Meta:
		verbose_name = "CantidadPersonal"
		verbose_name_plural = "CantidadPersonal"

	def __str__(self):
		return f"CantidadPersonal {self.id}"


class CantidadPartidas(models.Model):
	obra = models.ForeignKey(Obras, on_delete=models.CASCADE, default=None)
	partida = models.ForeignKey(Partidas, on_delete=models.CASCADE, default=None)
	cantidad = models.FloatField(default=1, blank=False)

	class Meta:
		verbose_name = "CantidadPartidas"
		verbose_name_plural = "CantidadPartidas"

	def __str__(self):
		return f"CantidadPartidas {self.id}"