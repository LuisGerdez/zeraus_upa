
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("admin/register", views.register, name="register"),
    path("admin/modificar_usuarios", views.modificar_usuarios, name="modificar_usuarios"),
    path("error_no_permission", views.error_no_permission, name="error_no_permission"),
    path("error_no_login", views.error_no_login, name="error_no_login"),

    path("perfil", views.perfil, name="perfil"),

    path("equipos", views.equipos, name="equipos"),
    path("materiales", views.materiales, name="materiales"),
    path("personal", views.personal, name="personal"),
    path("partidas", views.partidas, name="partidas"),
    path("areas", views.areas, name="areas"),
    path("precio/materiales", views.precio_materiales, name="precio_materiales"),
    path("precio/equipos", views.precio_equipos, name="precio_equipos"),
    path("precio/personal", views.precio_personal, name="precio_personal"),
    path("analisis/partidas", views.analisis_partidas, name="analisis_partidas"),
    path("obras", views.obras, name="obras"),
    path("presupuestos", views.presupuestos, name="presupuestos"),
    path("reporte/lista_materiales/<str:codigo>", views.reporte_lista_materiales, name="reporte_lista_materiales"),
    path("reporte/apu/<str:codigo>", views.reporte_apu, name="reporte_apu"),
    path("reporte/presupuesto_obra/<str:codigo>", views.reporte_presupuesto_obra, name="reporte_presupuesto_obra"),

    path("pdf/lista_materiales/<str:codigo>", views.pdf_lista_materiales, name="pdf_lista_materiales"),
    path("pdf/apu/<str:codigo>", views.pdf_apu, name="pdf_apu"),
    path("pdf/presupuesto_obra/<str:codigo>", views.pdf_presupuesto_obra, name="pdf_presupuesto_obra"),
    
    path("excel/lista_materiales/<str:codigo>", views.excel_lista_materiales, name="excel_lista_materiales"),
    path("excel/apu/<str:codigo>", views.excel_apu, name="excel_apu"),
    path("excel/presupuesto_obra/<str:codigo>", views.excel_presupuesto_obra, name="excel_presupuesto_obra"),

    # API Routes
    path("api/buscar_todos/<str:tipo>", views.buscar_todos_api, name="buscar_todos_api"),
    path("api/agregar/<str:tipo>", views.agregar_api, name="agregar_api"),
    path("api/modificar/<str:tipo>", views.modificar_api, name="modificar_api"),
    path("api/eliminar/<str:tipo>", views.eliminar_api, name="eliminar_api"),
]


handler404 = "app.views.custom_page_not_found_view"
handler500 = "app.views.custom_error_view"
handler403 = "app.views.custom_permission_denied_view"
handler400 = "app.views.custom_bad_request_view"