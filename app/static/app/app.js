document.addEventListener('DOMContentLoaded', function() {
	if(window.location.pathname.split('/')[1] === 'equipos') {
		const btn_agregar = document.querySelector('#btn_agregar');
		const btn_modificar = document.querySelector('#btn_modificar');
		const btn_eliminar = document.querySelector('#btn_eliminar');
		const input_equipo_codigo = document.querySelector('#equipo_codigo');
		const input_equipo_descripcion = document.querySelector('#equipo_descripcion');
		const input_equipo_unidad = document.querySelector('#equipo_unidad');

		btn_agregar.addEventListener('click', function(e) {
			if(input_equipo_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_equipo_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_equipo_unidad.value == '') {
				bootstrapAlert('Por favor rellene el campo unidad!', 'info');
			} else {
				fetch('/api/agregar/equipos', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_equipo_codigo.value,
			        	descripcion: input_equipo_descripcion.value,
			        	unidad: input_equipo_unidad.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_equipo_codigo.value = '';
			    		input_equipo_descripcion.value = '';
			    		input_equipo_unidad.value = '';
			    		bootstrapAlert('Equipo agregado con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('equipos');
						}, 100);
					} else if(result.error == 'AlreadyExist.') {
			    		bootstrapAlert('Este equipo ya está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para agregar equipos!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al agregar el equipo!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al agregar el equipo!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_modificar.addEventListener('click', function(e) {
			if(input_equipo_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_equipo_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_equipo_unidad.value == '') {
				bootstrapAlert('Por favor rellene el campo unidad!', 'info');
			} else {
				fetch('/api/modificar/equipos', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_equipo_codigo.value,
			        	descripcion: input_equipo_descripcion.value,
			        	unidad: input_equipo_unidad.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_equipo_codigo.value = '';
			    		input_equipo_descripcion.value = '';
			    		input_equipo_unidad.value = '';
			    		bootstrapAlert('Equipo modificado con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('equipos');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Este equipo no está registrado!', 'warning');
			    	}
			    	else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para modificar equipos!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al modificar el equipo!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al modificar el equipo!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_eliminar.addEventListener('click', function(e) {
			if(input_equipo_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else {
				fetch('/api/eliminar/equipos', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_equipo_codigo.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_equipo_codigo.value = '';
			    		input_equipo_descripcion.value = '';
			    		input_equipo_unidad.value = '';
			    		bootstrapAlert('Equipo eliminado con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('equipos');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Este equipo no está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para eliminar equipos!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al eliminar el equipo!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al eliminar el equipo!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		fill_table('equipos');
	}

	if(window.location.pathname.split('/')[1] === 'materiales') {
		const btn_agregar = document.querySelector('#btn_agregar');
		const btn_modificar = document.querySelector('#btn_modificar');
		const btn_eliminar = document.querySelector('#btn_eliminar');
		const input_material_codigo = document.querySelector('#material_codigo');
		const input_material_descripcion = document.querySelector('#material_descripcion');
		const input_material_unidad = document.querySelector('#material_unidad');
		const input_material_desperdicio = document.querySelector('#material_desperdicio');

		btn_agregar.addEventListener('click', function(e) {
			if(input_material_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_material_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_material_unidad.value == '') {
				bootstrapAlert('Por favor rellene el campo unidad!', 'info');
			} else if(input_material_desperdicio.value == '') {
				bootstrapAlert('Por favor rellene el campo desperdicio!', 'info');
			} else {
				fetch('/api/agregar/materiales', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_material_codigo.value,
			        	descripcion: input_material_descripcion.value,
			        	unidad: input_material_unidad.value,
			        	desperdicio: input_material_desperdicio.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_material_codigo.value = '';
			    		input_material_descripcion.value = '';
			    		input_material_unidad.value = '';
			    		input_material_desperdicio.value = '0';
			    		bootstrapAlert('Material agregado con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('materiales');
						}, 100);
					} else if(result.error == 'AlreadyExist.') {
			    		bootstrapAlert('Este material ya está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para agregar materiales!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al agregar el material!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al agregar el material!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_modificar.addEventListener('click', function(e) {
			if(input_material_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_material_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_material_unidad.value == '') {
				bootstrapAlert('Por favor rellene el campo unidad!', 'info');
			} else if(input_material_desperdicio.value == '') {
				bootstrapAlert('Por favor rellene el campo desperdicio!', 'info');
			} else {
				fetch('/api/modificar/materiales', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_material_codigo.value,
			        	descripcion: input_material_descripcion.value,
			        	unidad: input_material_unidad.value,
			        	desperdicio: input_material_desperdicio.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_material_codigo.value = '';
			    		input_material_descripcion.value = '';
			    		input_material_unidad.value = '';
			    		input_material_desperdicio.value = '0';
			    		bootstrapAlert('Material modificado con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('materiales');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Este material no está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para modificar materiales!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al modificar el material!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al modificar el material!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_eliminar.addEventListener('click', function(e) {
			if(input_material_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else {
				fetch('/api/eliminar/materiales', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_material_codigo.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_material_codigo.value = '';
			    		input_material_descripcion.value = '';
			    		input_material_unidad.value = '';
			    		input_material_desperdicio.value = '0';
			    		bootstrapAlert('Material eliminado con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('materiales');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Este material no está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para eliminar materiales!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al eliminar el material!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al eliminar el material!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		fill_table('materiales');
	}
	
	if(window.location.pathname.split('/')[1] === 'personal') {
		const btn_agregar = document.querySelector('#btn_agregar');
		const btn_modificar = document.querySelector('#btn_modificar');
		const btn_eliminar = document.querySelector('#btn_eliminar');
		const input_personal_codigo = document.querySelector('#personal_codigo');
		const input_personal_descripcion = document.querySelector('#personal_descripcion');
		const input_personal_unidad = document.querySelector('#personal_unidad');

		btn_agregar.addEventListener('click', function(e) {
			if(input_personal_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_personal_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_personal_unidad.value == '') {
				bootstrapAlert('Por favor rellene el campo unidad!', 'info');
			} else {
				fetch('/api/agregar/personal', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_personal_codigo.value,
			        	descripcion: input_personal_descripcion.value,
			        	unidad: input_personal_unidad.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_personal_codigo.value = '';
			    		input_personal_descripcion.value = '';
			    		input_personal_unidad.value = '';
			    		bootstrapAlert('Personal agregado con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('personal');
						}, 100);
					} else if(result.error == 'AlreadyExist.') {
			    		bootstrapAlert('Este personal ya está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para agregar personal!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al agregar el personal!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al agregar el personal!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_modificar.addEventListener('click', function(e) {
			if(input_personal_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_personal_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_personal_unidad.value == '') {
				bootstrapAlert('Por favor rellene el campo unidad!', 'info');
			} else {
				fetch('/api/modificar/personal', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_personal_codigo.value,
			        	descripcion: input_personal_descripcion.value,
			        	unidad: input_personal_unidad.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_personal_codigo.value = '';
			    		input_personal_descripcion.value = '';
			    		input_personal_unidad.value = '';
			    		bootstrapAlert('Personal modificado con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('personal');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Este personal no está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para modificar personal!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al modificar el personal!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al modificar el personal!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_eliminar.addEventListener('click', function(e) {
			if(input_personal_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else {
				fetch('/api/eliminar/personal', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_personal_codigo.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_personal_codigo.value = '';
			    		input_personal_descripcion.value = '';
			    		input_personal_unidad.value = '';
			    		bootstrapAlert('Personal eliminado con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('personal');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Este personal no está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para eliminar personal!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al eliminar el personal!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al eliminar el personal!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		fill_table('personal');
	}

	if(window.location.pathname.split('/')[1] === 'partidas') {
		const btn_agregar = document.querySelector('#btn_agregar');
		const btn_copiar_modal = document.querySelector('#btn_copiar_modal');
		const btn_copiar = document.querySelector('#btn_copiar');
		const btn_modificar = document.querySelector('#btn_modificar');
		const btn_eliminar = document.querySelector('#btn_eliminar');
		const input_partida_codigo = document.querySelector('#partida_codigo');
		const input_partida_nombre = document.querySelector('#partida_descripcion');
		const input_partida_descripcion = document.querySelector('#partida_descripcion');
		const input_partida_unidad = document.querySelector('#partida_unidad');
		const input_partida_original = document.querySelector('#copiar_original');
		const input_partida_nueva = document.querySelector('#copiar_nueva');

		btn_agregar.addEventListener('click', function(e) {
			if(input_partida_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_partida_nombre.value == '') {
				bootstrapAlert('Por favor rellene el campo nombre!', 'info');
			} else if(input_partida_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_partida_unidad.value == '') {
				bootstrapAlert('Por favor rellene el campo unidad!', 'info');
			} else {
				fetch('/api/agregar/partidas', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_partida_codigo.value,
			        	nombre: input_partida_nombre.value,
			        	descripcion: input_partida_descripcion.value,
			        	unidad: input_partida_unidad.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_partida_codigo.value = '';
			    		input_partida_nombre.value = '';
			    		input_partida_descripcion.value = '';
			    		input_partida_unidad.value = '';
			    		bootstrapAlert('Partida agregada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('partidas');
						}, 100);
					} else if(result.error == 'AlreadyExist.') {
			    		bootstrapAlert('Esta partida ya está registrada!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para agregar partidas!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al agregar la partida!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al agregar la partida!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_modificar.addEventListener('click', function(e) {
			if(input_partida_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_partida_nombre.value == '') {
				bootstrapAlert('Por favor rellene el campo nombre!', 'info');
			} else if(input_partida_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_partida_unidad.value == '') {
				bootstrapAlert('Por favor rellene el campo unidad!', 'info');
			} else {
				fetch('/api/modificar/partidas', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_partida_codigo.value,
			        	nombre: input_partida_nombre.value,
			        	descripcion: input_partida_descripcion.value,
			        	unidad: input_partida_unidad.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_partida_codigo.value = '';
			    		input_partida_nombre.value = '';
			    		input_partida_descripcion.value = '';
			    		input_partida_unidad.value = '';
			    		bootstrapAlert('Partida modificada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('partidas');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Esta partida no está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para modificar partidas!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al modificar la partida!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al modificar la partida!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_eliminar.addEventListener('click', function(e) {
			if(input_partida_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else {
				fetch('/api/eliminar/partidas', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_partida_codigo.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_partida_codigo.value = '';
			    		input_partida_nombre.value = '';
			    		input_partida_descripcion.value = '';
			    		input_partida_unidad.value = '';
			    		bootstrapAlert('Partida eliminada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('partidas');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Esta partida no está registrada!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para eliminado partidas!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al eliminar la partida!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al eliminar la partida!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_copiar_modal.addEventListener('click', function(e) {
			if(input_partida_codigo.value == '') {
				bootstrapAlert('Por favor seleccione una partida a copiar!', 'info');
			} else {
				input_partida_original.value = input_partida_codigo.value;
				input_partida_nueva.value = '';
				$('#copiarModal').modal('show');
			}
		});

		btn_copiar.addEventListener('click', function(e) {
			if(input_partida_nueva.value == '') {
				bootstrapAlert('Por favor rellene el campo código de la partida nueva!', 'info');
			} else {
				bootstrapAlert('Copiando partida...', 'info');
				fetch('/api/agregar/partidas_copia', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo_original: input_partida_original.value,
			        	codigo_nueva: input_partida_nueva.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_partida_codigo.value = '';
			    		input_partida_nombre.value = '';
			    		input_partida_descripcion.value = '';
			    		input_partida_unidad.value = '';
			    		bootstrapAlert('Partida copiada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('partidas');
						}, 100);
					} else if(result.error == 'AlreadyExist.') {
			    		bootstrapAlert('Ya existe una partida con ese código!', 'warning');
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('La partida original no existe!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para copiar partidas!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al copiar la partida!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al copiar la partida!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		fill_table('partidas');
	}

	if(window.location.pathname.split('/')[1] === 'areas') {
		const btn_agregar = document.querySelector('#btn_agregar');
		const btn_modificar = document.querySelector('#btn_modificar');
		const btn_eliminar = document.querySelector('#btn_eliminar');
		const input_area_codigo = document.querySelector('#area_codigo');
		const input_area_descripcion = document.querySelector('#area_descripcion');
		const input_area_tasa = document.querySelector('#area_tasa');

		btn_agregar.addEventListener('click', function(e) {
			if(input_area_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_area_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_area_tasa.value == '') {
				bootstrapAlert('Por favor rellene el campo tasa!', 'info');
			} else {
				fetch('/api/agregar/areas', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_area_codigo.value,
			        	descripcion: input_area_descripcion.value,
			        	tasa_dolar: input_area_tasa.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_area_codigo.value = '';
			    		input_area_descripcion.value = '';
			    		input_area_tasa.value = '';
			    		bootstrapAlert('Área agregada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('areas');
						}, 100);
					} else if(result.error == 'AlreadyExist.') {
			    		bootstrapAlert('Esta área ya está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para agregar áreas!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al agregar el área!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al agregar el área!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_modificar.addEventListener('click', function(e) {
			if(input_area_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_area_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(input_area_tasa.value == '') {
				bootstrapAlert('Por favor rellene el campo tasa!', 'info');
			} else {
				fetch('/api/modificar/areas', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_area_codigo.value,
			        	descripcion: input_area_descripcion.value,
			        	tasa_dolar: input_area_tasa.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_area_codigo.value = '';
			    		input_area_descripcion.value = '';
			    		input_area_tasa.value = '';
			    		bootstrapAlert('Área modificada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('areas');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Esta área no está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para modificar áreas!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al modificar el área!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al modificar el área!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_eliminar.addEventListener('click', function(e) {
			if(input_area_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else {
				fetch('/api/eliminar/areas', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_area_codigo.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_area_codigo.value = '';
			    		input_area_descripcion.value = '';
			    		input_area_tasa.value = '';
			    		bootstrapAlert('Área eliminada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('areas');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Esta área no está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para eliminar áreas!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al eliminar el área!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al eliminar el área!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		fill_table('areas');
	}

	if(window.location.pathname.split('/')[1] === 'precio' && window.location.pathname.split('/')[2] === 'materiales') {
		const select_area_codigo = document.querySelector('#area_codigo');
		const input_area_descripcion = document.querySelector('#area_descripcion');
		const input_area_tasa = document.querySelector('#area_tasa');

		$(select_area_codigo).empty().append('<option selected="selected" value="">Seleccionar área</option>');

		fetch('/api/buscar_todos/areas')
		.then(response => response.json())
		.then(data => {
			data.forEach(area => {
				var opt = document.createElement('option');
			    opt.value = area.codigo + '|' + area.descripcion + '|' + area.tasa_dolar;
			    opt.innerHTML = area.codigo + ' - ' + area.descripcion;
			    select_area_codigo.appendChild(opt);
		    });
		})
		.catch(function(error) {
			console.log('Error buscar areas: ' + error);
		});

		$(select_area_codigo).on('change', function() {
			var val = this.value.split('|');

			if(!(val[0] == '')) {
				input_area_descripcion.value = val[1];
				input_area_tasa.value = val[2];
			} else {
				input_area_descripcion.value = '';
				input_area_tasa.value = '';
			}

			fill_table('precio_materiales', val[0]);
		});

		fill_table('precio_materiales', '');
	}

	if(window.location.pathname.split('/')[1] === 'precio' && window.location.pathname.split('/')[2] === 'equipos') {
		const select_area_codigo = document.querySelector('#area_codigo');
		const input_area_descripcion = document.querySelector('#area_descripcion');
		const input_area_tasa = document.querySelector('#area_tasa');

		$(select_area_codigo).empty().append('<option selected="selected" value="">Seleccionar área</option>');

		fetch('/api/buscar_todos/areas')
		.then(response => response.json())
		.then(data => {
			data.forEach(area => {
				var opt = document.createElement('option');
			    opt.value = area.codigo + '|' + area.descripcion + '|' + area.tasa_dolar;
			    opt.innerHTML = area.codigo + ' - ' + area.descripcion;
			    select_area_codigo.appendChild(opt);
		    });
		})
		.catch(function(error) {
			console.log('Error buscar areas: ' + error);
		});

		$(select_area_codigo).on('change', function() {
			var val = this.value.split('|');

			if(!(val[0] == '')) {
				input_area_descripcion.value = val[1];
				input_area_tasa.value = val[2];
			} else {
				input_area_descripcion.value = '';
				input_area_tasa.value = '';
			}

			fill_table('precio_equipos', val[0]);
		});

		fill_table('precio_equipos', '');
	}

	if(window.location.pathname.split('/')[1] === 'precio' && window.location.pathname.split('/')[2] === 'personal') {
		const select_area_codigo = document.querySelector('#area_codigo');
		const input_area_descripcion = document.querySelector('#area_descripcion');
		const input_area_tasa = document.querySelector('#area_tasa');

		$(select_area_codigo).empty().append('<option selected="selected" value="">Seleccionar área</option>');

		fetch('/api/buscar_todos/areas')
		.then(response => response.json())
		.then(data => {
			data.forEach(area => {
				var opt = document.createElement('option');
			    opt.value = area.codigo + '|' + area.descripcion + '|' + area.tasa_dolar;
			    opt.innerHTML = area.codigo + ' - ' + area.descripcion;
			    select_area_codigo.appendChild(opt);
		    });
		})
		.catch(function(error) {
			console.log('Error: ' + error);
		});

		$(select_area_codigo).on('change', function() {
			var val = this.value.split('|');

			if(!(val[0] == '')) {
				input_area_descripcion.value = val[1];
				input_area_tasa.value = val[2];
			} else {
				input_area_descripcion.value = '';
				input_area_tasa.value = '';
			}

			fill_table('precio_personal', val[0]);
		});

		fill_table('precio_personal', '');
	}

	if(window.location.pathname.split('/')[1] === 'analisis' && window.location.pathname.split('/')[2] === 'partidas') {
		const select_partida_codigo = document.querySelector('#partida_codigo');
		const input_partida_nombre = document.querySelector('#partida_nombre');
		const input_partida_descripcion = document.querySelector('#partida_descripcion');
		const input_partida_unidad = document.querySelector('#partida_unidad');
		const input_partida_rendimiento = document.querySelector('#partida_rendimiento');
		const table_materiales_agregar = document.querySelector('#tabla_materiales_agregar');
		const table_equipos_agregar = document.querySelector('#tabla_equipos_agregar');
		const table_personal_agregar = document.querySelector('#tabla_personal_agregar');

		$(select_partida_codigo).empty().append('<option selected="selected" value="">Seleccionar partida</option>');

		fetch('/api/buscar_todos/partidas')
		.then(response => response.json())
		.then(data => {
			data.forEach(partida => {
				var opt = document.createElement('option');
			    opt.value = partida.codigo + '|' + partida.nombre + '|' + partida.descripcion + '|' + partida.unidad + '|' + partida.rendimiento;
			    opt.innerHTML = partida.codigo + ' - ' + partida.descripcion;
			    select_partida_codigo.appendChild(opt);
		    });
		})
		.catch(function(error) {
			console.log('Error buscar partidas: ' + error);
		});

		$(select_partida_codigo).on('change', function() {
			var val = this.value.split('|');

			if(!(val[0] == '')) {
				input_partida_nombre.value = val[1];
				input_partida_descripcion.value = val[2];
				input_partida_unidad.value = val[3];
				input_partida_rendimiento.value = val[4];
			} else {
				input_partida_nombre.value = '';
				input_partida_descripcion.value = '';
				input_partida_unidad.value = '';
				input_partida_rendimiento.value = '';
			}

			fill_table('analisis_partidas', val[0], 'materiales');
			fill_table('analisis_partidas', val[0], 'equipos');
			fill_table('analisis_partidas', val[0], 'personal');
		});

		fill_table('analisis_partidas', '', 'materiales');
		fill_table('analisis_partidas', '', 'equipos');
		fill_table('analisis_partidas', '', 'personal');

		// Fill Materiales modal table
		$(table_materiales_agregar).DataTable().destroy();
		$('#tabla_materiales_agregar tbody tr').remove();

		fetch('/api/buscar_todos/materiales')
		.then(response => response.json())
		.then(data => {
			data.forEach(material => {
				var new_row = "<tr><td>" + material.codigo + "</td><td>" + material.descripcion + "</td><td>" + material.unidad + "</td><td>" + material.desperdicio + "</td><td>" + "<button type='button'  class='btn btn-dark btn-sm btn_agregar_materiales'>Agregar</button>" + "</td></tr>";
				$(table_materiales_agregar).append(new_row);
			});

			$('#tabla_materiales_agregar').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'columnDefs': [{'orderable': false, 'targets': [4]}],
				'language': {
				    "sProcessing":    "Procesando...",
				    "sLengthMenu":    "Mostrar _MENU_ registros",
				    "sZeroRecords":   "No se encontraron resultados",
				    "sEmptyTable":    "Ningún dato disponible en esta tabla",
				    "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				    "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
				    "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
				    "sInfoPostFix":   "",
				    "sSearch":        "Buscar:",
				    "sUrl":           "",
				    "sInfoThousands":  ",",
				    "sLoadingRecords": "Cargando...",
				    "oPaginate": {
				        "sFirst":    "Primero",
				        "sLast":    "Último",
				        "sNext":    ">",
				        "sPrevious": "<"
				    },
				    "oAria": {
				        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
				    }
				}
			});
		})
		.catch(function(error) {
			console.log('Error buscar materiales: ' + error);
		});

		$('#agregarMaterialesModal').on('shown.bs.modal', function () {
			$('#tabla_materiales_agregar').DataTable().columns.adjust();
		})

		$('#agregarMaterialesModal').on('hide.bs.modal', function () {
			fill_table('analisis_partidas', select_partida_codigo.value.split('|')[0], 'materiales');
		})

		// Fill Equipos modal table
		$(table_equipos_agregar).DataTable().destroy();
		$('#tabla_equipos_agregar tbody tr').remove();

		fetch('/api/buscar_todos/equipos')
		.then(response => response.json())
		.then(data => {
			data.forEach(equipo => {
				var new_row = "<tr><td>" + equipo.codigo + "</td><td>" + equipo.descripcion + "</td><td>" + equipo.unidad + "</td><td>" + equipo.depreciacion.toString().replace('.', ',') + "</td><td>" + "<button type='button'  class='btn btn-dark btn-sm btn_agregar_equipos'>Agregar</button>" + "</td></tr>";
				$(table_equipos_agregar).append(new_row);
			});

			$('#tabla_equipos_agregar').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'columnDefs': [{'orderable': false, 'targets': [4]}],
				'language': {
				    "sProcessing":    "Procesando...",
				    "sLengthMenu":    "Mostrar _MENU_ registros",
				    "sZeroRecords":   "No se encontraron resultados",
				    "sEmptyTable":    "Ningún dato disponible en esta tabla",
				    "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				    "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
				    "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
				    "sInfoPostFix":   "",
				    "sSearch":        "Buscar:",
				    "sUrl":           "",
				    "sInfoThousands":  ",",
				    "sLoadingRecords": "Cargando...",
				    "oPaginate": {
				        "sFirst":    "Primero",
				        "sLast":    "Último",
				        "sNext":    ">",
				        "sPrevious": "<"
				    },
				    "oAria": {
				        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
				    }
				}
			});
		})
		.catch(function(error) {
			console.log('Error buscar equipos: ' + error);
		});

		$('#agregarEquiposModal').on('shown.bs.modal', function () {
			$('#tabla_equipos_agregar').DataTable().columns.adjust();
		})

		$('#agregarEquiposModal').on('hide.bs.modal', function () {
			fill_table('analisis_partidas', select_partida_codigo.value.split('|')[0], 'equipos');
		})

		// Fill Personal modal table
		$(table_personal_agregar).DataTable().destroy();
		$('#tabla_personal_agregar tbody tr').remove();

		fetch('/api/buscar_todos/personal')
		.then(response => response.json())
		.then(data => {
			data.forEach(personal => {
				var new_row = "<tr><td>" + personal.codigo + "</td><td>" + personal.descripcion + "</td><td>" + personal.unidad + "</td><td>" + "<button type='button'  class='btn btn-dark btn-sm btn_agregar_personal'>Agregar</button>" + "</td></tr>";
				$(table_personal_agregar).append(new_row);
			});

			$('#tabla_personal_agregar').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'columnDefs': [{'orderable': false, 'targets': [3]}],
				'language': {
				    "sProcessing":    "Procesando...",
				    "sLengthMenu":    "Mostrar _MENU_ registros",
				    "sZeroRecords":   "No se encontraron resultados",
				    "sEmptyTable":    "Ningún dato disponible en esta tabla",
				    "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				    "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
				    "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
				    "sInfoPostFix":   "",
				    "sSearch":        "Buscar:",
				    "sUrl":           "",
				    "sInfoThousands":  ",",
				    "sLoadingRecords": "Cargando...",
				    "oPaginate": {
				        "sFirst":    "Primero",
				        "sLast":    "Último",
				        "sNext":    ">",
				        "sPrevious": "<"
				    },
				    "oAria": {
				        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
				    }
				}
			});
		})
		.catch(function(error) {
			console.log('Error buscar personal: ' + error);
		});

		$('#agregarPersonalModal').on('shown.bs.modal', function () {
			$('#tabla_personal_agregar').DataTable().columns.adjust();
		})

		$('#agregarPersonalModal').on('hide.bs.modal', function () {
			fill_table('analisis_partidas', select_partida_codigo.value.split('|')[0], 'personal');
		})
	}

	if(window.location.pathname.split('/')[1] === 'obras') {
		const btn_agregar = document.querySelector('#btn_agregar');
		const btn_modificar = document.querySelector('#btn_modificar');
		const btn_eliminar = document.querySelector('#btn_eliminar');
		const select_obra_area = document.querySelector('#obra_area');
		const input_obra_codigo = document.querySelector('#obra_codigo');
		const input_obra_descripcion = document.querySelector('#obra_descripcion');
		const input_obra_fcas = document.querySelector('#obra_fcas');
		const input_obra_administracion = document.querySelector('#obra_administracion');
		const input_obra_utilidad = document.querySelector('#obra_utilidad');
		const input_obra_alimentacion = document.querySelector('#obra_alimentacion');
		const input_obra_dificultad = document.querySelector('#obra_dificultad');
		const input_obra_transporte = document.querySelector('#obra_transporte');
		const input_obra_iva = document.querySelector('#obra_iva');

		$(select_obra_area).empty().append('<option selected="selected" value="">Seleccionar área</option>');

		fetch('/api/buscar_todos/areas')
		.then(response => response.json())
		.then(data => {
			data.forEach(area => {
				var opt = document.createElement('option');
			    opt.value = area.codigo;
			    opt.innerHTML = area.codigo + ' - ' + area.descripcion;
			    select_obra_area.appendChild(opt);
		    });
		})
		.catch(function(error) {
			console.log('Error buscar areas: ' + error);
		});

		btn_agregar.addEventListener('click', function(e) {
			if(input_obra_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_obra_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(select_obra_area.value == '') {
				bootstrapAlert('Por favor rellene el campo área!', 'info');
			} else {
				fetch('/api/agregar/obras', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_obra_codigo.value,
			        	descripcion: input_obra_descripcion.value,
			        	area: select_obra_area.value,
			        	bono_alimentacion: input_obra_alimentacion.value,
			        	f_administracion: input_obra_administracion.value,
			        	f_utilidad: input_obra_utilidad.value,
			        	grado_dificultad: input_obra_dificultad.value,
			        	tarifa_transporte: input_obra_transporte.value,
			        	fcas: input_obra_fcas.value,
			        	iva: input_obra_iva.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_obra_codigo.value = '';
			    		input_obra_descripcion.value = '';
			    		select_obra_area.value = '';
						input_obra_fcas.value = '';
						input_obra_administracion.value = '';
						input_obra_utilidad.value = '';
						input_obra_alimentacion.value = '';
						input_obra_dificultad.value = '';
						input_obra_transporte.value = '';
						input_obra_iva.value = '';
			    		bootstrapAlert('Obra agregada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('obras');
						}, 100);
					} else if(result.error == 'AlreadyExist.') {
			    		bootstrapAlert('Esta obra ya está registrada!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para agregar obras!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al agregar la obra!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al agregar la obra!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_modificar.addEventListener('click', function(e) {
			if(input_obra_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else if(input_obra_descripcion.value == '') {
				bootstrapAlert('Por favor rellene el campo descripcion!', 'info');
			} else if(select_obra_area.value == '') {
				bootstrapAlert('Por favor rellene el campo área!', 'info');
			} else {
				fetch('/api/modificar/obras', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_obra_codigo.value,
			        	descripcion: input_obra_descripcion.value,
			        	area: select_obra_area.value,
			        	bono_alimentacion: input_obra_alimentacion.value,
			        	f_administracion: input_obra_administracion.value,
			        	f_utilidad: input_obra_utilidad.value,
			        	grado_dificultad: input_obra_dificultad.value,
			        	tarifa_transporte: input_obra_transporte.value,
			        	fcas: input_obra_fcas.value,
			        	iva: input_obra_iva.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_obra_codigo.value = '';
			    		input_obra_descripcion.value = '';
			    		select_obra_area.value = '';
						input_obra_fcas.value = '';
						input_obra_administracion.value = '';
						input_obra_utilidad.value = '';
						input_obra_alimentacion.value = '';
						input_obra_dificultad.value = '';
						input_obra_transporte.value = '';
						input_obra_iva.value = '';
			    		bootstrapAlert('Obra modificada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('obras');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Esta obra no está registrado!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para modificar obras!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al modificar la obra!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al modificar la obra!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		btn_eliminar.addEventListener('click', function(e) {
			if(input_obra_codigo.value == '') {
				bootstrapAlert('Por favor rellene el campo código!', 'info');
			} else {
				fetch('/api/eliminar/obras', {
			    	method: 'POST',
			    	body: JSON.stringify({
			        	codigo: input_obra_codigo.value
			    	})
			   	})
			    .then(response => response.json())
			    .then(result => {
			    	if(!result.error) {
			    		input_obra_codigo.value = '';
			    		input_obra_descripcion.value = '';
			    		select_obra_area.value = '';
						input_obra_fcas.value = '';
						input_obra_administracion.value = '';
						input_obra_utilidad.value = '';
						input_obra_alimentacion.value = '';
						input_obra_dificultad.value = '';
						input_obra_transporte.value = '';
						input_obra_iva.value = '';
			    		bootstrapAlert('Obra eliminada con éxito!', 'success');

			    		setTimeout(() => {
							fill_table('obras');
						}, 100);
			    	} else if(result.error == 'DoesNotExist.') {
			    		bootstrapAlert('Esta obra no está registrada!', 'warning');
			    	} else if(result.error == 'No permission.') {
			    		bootstrapAlert('Tu cuenta no tiene permisos para eliminar obras!', 'info');
			    	} else {
			    		bootstrapAlert('Ha ocurrido un error al eliminar la obra!', 'danger');
			    	}
			    })
			    .catch(function(error) {
			    	bootstrapAlert('Ha ocurrido un error al eliminar la obra!', 'danger');
			    	console.log('Error: ' + error);
			    });
			}
		});

		fill_table('obras');
	}

	if(window.location.pathname.split('/')[1] === 'presupuestos') {
		const btn_datos = document.querySelector('#btn_datos');
		const btn_computos_metricos = document.querySelector('#btn_computos_metricos');
		const btn_lista_materiales = document.querySelector('#btn_lista_materiales');
		const btn_analisis_precios_unitarios = document.querySelector('#btn_analisis_precios_unitarios');
		const select_obra_codigo = document.querySelector('#obra_codigo');
		const input_obra_descripcion = document.querySelector('#obra_descripcion');
		const input_datos_area = document.querySelector('#datos_area');
		const input_datos_fcas = document.querySelector('#datos_fcas');
		const input_datos_utilidad = document.querySelector('#datos_utilidad');
		const input_datos_administracion = document.querySelector('#datos_administracion');
		const input_datos_alimentacion = document.querySelector('#datos_alimentacion');
		const input_datos_dificultad = document.querySelector('#datos_dificultad');
		const input_datos_transporte = document.querySelector('#datos_transporte');
		const input_datos_iva = document.querySelector('#datos_iva');
		const table_partidas_agregar = document.querySelector('#tabla_partidas_agregar');

		$(select_obra_codigo).empty().append('<option selected="selected" value="">Seleccionar obra</option>');

		fetch('/api/buscar_todos/obras')
		.then(response => response.json())
		.then(data => {
			data.forEach(obra => {
				var opt = document.createElement('option');
			    opt.value = obra.codigo + '|' + obra.descripcion + '|' + obra.area + '|' + obra.fcas + '|' + obra.f_utilidad + '|' + obra.f_administracion + '|' + obra.bono_alimentacion + '|' + obra.grado_dificultad + '|' + obra.tarifa_transporte + '|' + obra.iva;
			    opt.innerHTML = obra.codigo + ' - ' + obra.descripcion;
			    select_obra_codigo.appendChild(opt);
		    });
		})
		.catch(function(error) {
			console.log('Error buscar obras: ' + error);
		});

		$(select_obra_codigo).on('change', function() {
			var val = this.value.split('|');

			if(!(val[0] == '')) {
				input_obra_descripcion.value = val[1];
				input_datos_area.value = val[2];
				input_datos_fcas.value = val[3] + '%';
				input_datos_utilidad.value = val[4] + '%';
				input_datos_administracion.value = val[5] + '%';
				input_datos_alimentacion.value = val[6];
				input_datos_dificultad.value = val[7] + '%';
				input_datos_transporte.value = val[8] + '%';
				input_datos_iva.value = val[8] + '%';
			} else {
				input_obra_descripcion.value = '';
				input_datos_area.value = '';
				input_datos_fcas.value = '';
				input_datos_utilidad.value = '';
				input_datos_administracion.value = '';
				input_datos_alimentacion.value = '';
				input_datos_dificultad.value = '';
				input_datos_transporte.value = '';
				input_datos_iva.value = '';
			}

			fill_table('presupuestos', val[0], null);
		});

		$(btn_datos).on('click', function() {
			if(select_obra_codigo.value.split('|')[0] != '') {
				$('#datosModal').modal('show');
			} else {
				bootstrapAlert('Por favor seleccione una obra!', 'info');
			}
		});

		$(btn_computos_metricos).on('click', function() {
			if(select_obra_codigo.value != ''){
				var url = 'http://' + location.host + '/reporte/apu/' + select_obra_codigo.value.split('|')[0];
				window.open(url, '_blank');
			} else {
				bootstrapAlert('Por favor seleccione una obra!', 'info');
			}
		});

		$(btn_lista_materiales).on('click', function() {
			if(select_obra_codigo.value != ''){
				var url = 'http://' + location.host + '/reporte/lista_materiales/' + select_obra_codigo.value.split('|')[0];
				window.open(url, '_blank');
			} else {
				bootstrapAlert('Por favor seleccione una obra!', 'info');
			}
		});

		$(btn_analisis_precios_unitarios).on('click', function() {
			if(select_obra_codigo.value != ''){
				var url = 'http://' + location.host + '/reporte/presupuesto_obra/' + select_obra_codigo.value.split('|')[0];
				window.open(url, '_blank');
			} else {
				bootstrapAlert('Por favor seleccione una obra!', 'info');
			}
		});

		fill_table('presupuestos', '', null);

		// Fill Materiales modal table
		$(table_partidas_agregar).DataTable().destroy();
		$('#tabla_partidas_agregar tbody tr').remove();

		fetch('/api/buscar_todos/partidas')
		.then(response => response.json())
		.then(data => {
			data.forEach(partida => {
				var new_row = "<tr><td>" + partida.codigo + "</td><td>" + partida.nombre + "</td><td>" + partida.descripcion + "</td><td>" + partida.unidad + "</td><td>" + partida.rendimiento + "</td><td>" + "<button type='button'  class='btn btn-dark btn-sm btn_agregar_partidas'>Agregar</button>" + "</td></tr>";
				$(table_partidas_agregar).append(new_row);
			});

			$('#tabla_partidas_agregar').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'columnDefs': [{'orderable': false, 'targets': [4]}],
				'language': {
				    "sProcessing":    "Procesando...",
				    "sLengthMenu":    "Mostrar _MENU_ registros",
				    "sZeroRecords":   "No se encontraron resultados",
				    "sEmptyTable":    "Ningún dato disponible en esta tabla",
				    "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				    "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
				    "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
				    "sInfoPostFix":   "",
				    "sSearch":        "Buscar:",
				    "sUrl":           "",
				    "sInfoThousands":  ",",
				    "sLoadingRecords": "Cargando...",
				    "oPaginate": {
				        "sFirst":    "Primero",
				        "sLast":    "Último",
				        "sNext":    ">",
				        "sPrevious": "<"
				    },
				    "oAria": {
				        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
				    }
				}
			});
		})
		.catch(function(error) {
			console.log('Error buscar partidas: ' + error);
		});

		$('#agregarPartidasModal').on('shown.bs.modal', function () {
			$('#tabla_partidas_agregar').DataTable().columns.adjust();
		})

		$('#agregarPartidasModal').on('hide.bs.modal', function () {
			fill_table('presupuestos', select_obra_codigo.value.split('|')[0], null);
		})
	}

	if(window.location.pathname.split('/')[1] === 'admin' && window.location.pathname.split('/')[2] === 'register') {
		const select_tipo_usuario = document.querySelector('#tipo_usuario');
		const container_checkbox = document.querySelector('#container_checkbox');
		const checkbox_perms_add_equipos = document.querySelector('#check_add_equipos');
		const checkbox_perms_change_equipos = document.querySelector('#check_change_equipos');
		const checkbox_perms_delete_equipos = document.querySelector('#check_delete_equipos');
		const checkbox_perms_add_materiales = document.querySelector('#check_add_materiales');
		const checkbox_perms_change_materiales = document.querySelector('#check_change_materiales');
		const checkbox_perms_delete_materiales = document.querySelector('#check_delete_materiales');
		const checkbox_perms_add_personal = document.querySelector('#check_add_personal');
		const checkbox_perms_change_personal = document.querySelector('#check_change_personal');
		const checkbox_perms_delete_personal = document.querySelector('#check_delete_personal');
		const checkbox_perms_add_partidas = document.querySelector('#check_add_partidas');
		const checkbox_perms_change_partidas = document.querySelector('#check_change_partidas');
		const checkbox_perms_delete_partidas = document.querySelector('#check_delete_partidas');
		const checkbox_perms_add_areas = document.querySelector('#check_add_areas');
		const checkbox_perms_change_areas = document.querySelector('#check_change_areas');
		const checkbox_perms_delete_areas = document.querySelector('#check_delete_areas');
		const checkbox_perms_change_precioequipos = document.querySelector('#check_change_precioequipos');
		const checkbox_perms_change_preciomateriales = document.querySelector('#check_change_preciomateriales');
		const checkbox_perms_change_preciopersonal = document.querySelector('#check_change_preciopersonal');
		const checkbox_perms_change_analisis = document.querySelector('#check_change_analisis');
		const checkbox_perms_add_obras = document.querySelector('#check_add_obras');
		const checkbox_perms_change_obras = document.querySelector('#check_change_obras');
		const checkbox_perms_delete_obras = document.querySelector('#check_delete_obras');
		const checkbox_perms_change_presupuesto = document.querySelector('#check_change_presupuesto');
		const checkbox_perms_report_presupuesto = document.querySelector('#check_report_presupuesto');

		$(select_tipo_usuario).on('change', function() {
			if(this.value == '2') {
				container_checkbox.style.display = 'none';
				checkbox_perms_add_equipos.disabled = true;
				checkbox_perms_change_equipos.disabled = true;
				checkbox_perms_delete_equipos.disabled = true;
				checkbox_perms_add_materiales.disabled = true;
				checkbox_perms_change_materiales.disabled = true;
				checkbox_perms_delete_materiales.disabled = true;
				checkbox_perms_add_personal.disabled = true;
				checkbox_perms_change_personal.disabled = true;
				checkbox_perms_delete_personal.disabled = true;
				checkbox_perms_add_partidas.disabled = true;
				checkbox_perms_change_partidas.disabled = true;
				checkbox_perms_delete_partidas.disabled = true;
				checkbox_perms_add_areas.disabled = true;
				checkbox_perms_change_areas.disabled = true;
				checkbox_perms_delete_areas.disabled = true;
				checkbox_perms_change_precioequipos.disabled = true;
				checkbox_perms_change_preciomateriales.disabled = true;
				checkbox_perms_change_preciopersonal.disabled = true;
				checkbox_perms_change_analisis.disabled = true;
				checkbox_perms_add_obras.disabled = true;
				checkbox_perms_change_obras.disabled = true;
				checkbox_perms_delete_obras.disabled = true;
				checkbox_perms_change_presupuesto.disabled = true;
				checkbox_perms_report_presupuesto.disabled = true;
			} else {
				container_checkbox.style.display = 'block';
				checkbox_perms_add_equipos.disabled = false;
				checkbox_perms_change_equipos.disabled = false;
				checkbox_perms_delete_equipos.disabled = false;
				checkbox_perms_add_materiales.disabled = false;
				checkbox_perms_change_materiales.disabled = false;
				checkbox_perms_delete_materiales.disabled = false;
				checkbox_perms_add_personal.disabled = false;
				checkbox_perms_change_personal.disabled = false;
				checkbox_perms_delete_personal.disabled = false;
				checkbox_perms_add_partidas.disabled = false;
				checkbox_perms_change_partidas.disabled = false;
				checkbox_perms_delete_partidas.disabled = false;
				checkbox_perms_add_areas.disabled = false;
				checkbox_perms_change_areas.disabled = false;
				checkbox_perms_delete_areas.disabled = false;
				checkbox_perms_change_precioequipos.disabled = false;
				checkbox_perms_change_preciomateriales.disabled = false;
				checkbox_perms_change_preciopersonal.disabled = false;
				checkbox_perms_change_analisis.disabled = false;
				checkbox_perms_add_obras.disabled = false;
				checkbox_perms_change_obras.disabled = false;
				checkbox_perms_delete_obras.disabled = false;
				checkbox_perms_change_presupuesto.disabled = false;
				checkbox_perms_report_presupuesto.disabled = false;
			}
		});
	}

	if(window.location.pathname.split('/')[1] === 'admin' && window.location.pathname.split('/')[2] === 'modificar_usuarios') {
		if(document.querySelector('#tipo_usuario')) {
			const select_tipo_usuario = document.querySelector('#tipo_usuario');
			const container_checkbox = document.querySelector('#container_checkbox');
			const checkbox_perms_add_equipos = document.querySelector('#check_add_equipos');
			const checkbox_perms_change_equipos = document.querySelector('#check_change_equipos');
			const checkbox_perms_delete_equipos = document.querySelector('#check_delete_equipos');
			const checkbox_perms_add_materiales = document.querySelector('#check_add_materiales');
			const checkbox_perms_change_materiales = document.querySelector('#check_change_materiales');
			const checkbox_perms_delete_materiales = document.querySelector('#check_delete_materiales');
			const checkbox_perms_add_personal = document.querySelector('#check_add_personal');
			const checkbox_perms_change_personal = document.querySelector('#check_change_personal');
			const checkbox_perms_delete_personal = document.querySelector('#check_delete_personal');
			const checkbox_perms_add_partidas = document.querySelector('#check_add_partidas');
			const checkbox_perms_change_partidas = document.querySelector('#check_change_partidas');
			const checkbox_perms_delete_partidas = document.querySelector('#check_delete_partidas');
			const checkbox_perms_add_areas = document.querySelector('#check_add_areas');
			const checkbox_perms_change_areas = document.querySelector('#check_change_areas');
			const checkbox_perms_delete_areas = document.querySelector('#check_delete_areas');
			const checkbox_perms_change_precioequipos = document.querySelector('#check_change_precioequipos');
			const checkbox_perms_change_preciomateriales = document.querySelector('#check_change_preciomateriales');
			const checkbox_perms_change_preciopersonal = document.querySelector('#check_change_preciopersonal');
			const checkbox_perms_change_analisis = document.querySelector('#check_change_analisis');
			const checkbox_perms_add_obras = document.querySelector('#check_add_obras');
			const checkbox_perms_change_obras = document.querySelector('#check_change_obras');
			const checkbox_perms_delete_obras = document.querySelector('#check_delete_obras');
			const checkbox_perms_change_presupuesto = document.querySelector('#check_change_presupuesto');
			const checkbox_perms_report_presupuesto = document.querySelector('#check_report_presupuesto');

			$(select_tipo_usuario).on('change', function() {
				if(this.value == '2') {
					container_checkbox.style.display = 'none';
					checkbox_perms_add_equipos.disabled = true;
					checkbox_perms_change_equipos.disabled = true;
					checkbox_perms_delete_equipos.disabled = true;
					checkbox_perms_add_materiales.disabled = true;
					checkbox_perms_change_materiales.disabled = true;
					checkbox_perms_delete_materiales.disabled = true;
					checkbox_perms_add_personal.disabled = true;
					checkbox_perms_change_personal.disabled = true;
					checkbox_perms_delete_personal.disabled = true;
					checkbox_perms_add_partidas.disabled = true;
					checkbox_perms_change_partidas.disabled = true;
					checkbox_perms_delete_partidas.disabled = true;
					checkbox_perms_add_areas.disabled = true;
					checkbox_perms_change_areas.disabled = true;
					checkbox_perms_delete_areas.disabled = true;
					checkbox_perms_change_precioequipos.disabled = true;
					checkbox_perms_change_preciomateriales.disabled = true;
					checkbox_perms_change_preciopersonal.disabled = true;
					checkbox_perms_change_analisis.disabled = true;
					checkbox_perms_add_obras.disabled = true;
					checkbox_perms_change_obras.disabled = true;
					checkbox_perms_delete_obras.disabled = true;
					checkbox_perms_change_presupuesto.disabled = true;
					checkbox_perms_report_presupuesto.disabled = true;
				} else {
					container_checkbox.style.display = 'block';
					checkbox_perms_add_equipos.disabled = false;
					checkbox_perms_change_equipos.disabled = false;
					checkbox_perms_delete_equipos.disabled = false;
					checkbox_perms_add_materiales.disabled = false;
					checkbox_perms_change_materiales.disabled = false;
					checkbox_perms_delete_materiales.disabled = false;
					checkbox_perms_add_personal.disabled = false;
					checkbox_perms_change_personal.disabled = false;
					checkbox_perms_delete_personal.disabled = false;
					checkbox_perms_add_partidas.disabled = false;
					checkbox_perms_change_partidas.disabled = false;
					checkbox_perms_delete_partidas.disabled = false;
					checkbox_perms_add_areas.disabled = false;
					checkbox_perms_change_areas.disabled = false;
					checkbox_perms_delete_areas.disabled = false;
					checkbox_perms_change_precioequipos.disabled = false;
					checkbox_perms_change_preciomateriales.disabled = false;
					checkbox_perms_change_preciopersonal.disabled = false;
					checkbox_perms_change_analisis.disabled = false;
					checkbox_perms_add_obras.disabled = false;
					checkbox_perms_change_obras.disabled = false;
					checkbox_perms_delete_obras.disabled = false;
					checkbox_perms_change_presupuesto.disabled = false;
					checkbox_perms_report_presupuesto.disabled = false;
				}
			});
		}
	}

});

function numberCurrencyFormat(number) {
	return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', currencyDisplay: 'code' }).format(number).replace('EUR', '').trim();
}

function bootstrapAlert(message, type) {
	var amount;
	$('.bootstrap-growl').alert('close');

	if(window.scrollY == 0) {
		amount = 82;
	} else {
		amount = 15;
	}

	$.bootstrapGrowl(message, {
		ele: 'body', // which element to append to
		type: type, // (null, 'info', 'error', 'success')
		offset: {from: 'top', amount: amount}, // 'top', or 'bottom'
		align: 'right', // ('left', 'right', or 'center')
		width: 250, // (integer, or 'auto')
		delay: 10000,
		allow_dismiss: true,
		stackup_spacing: 10 // spacing between consecutively stacked growls.
	});
}

function fill_table(tipo, arg1 = null, arg2 = null) {
	if(arg2 != null){
		var tabla = $('#tabla_analisis_' + arg2);

		tabla.DataTable().destroy();
		$('#tabla_analisis_' + arg2 + ' tbody tr').remove();
	} else {
		var tabla = $('#tabla_' + tipo);

		tabla.DataTable().destroy();
		$('#tabla_' + tipo + ' tbody tr').remove();
	}

	if(tipo == 'equipos') {
		fetch('/api/buscar_todos/equipos')
		.then(response => response.json())
		.then(data => {
			data.forEach(equipo => {
				var new_row = "<tr><td>" + equipo.codigo + "</td><td>" + equipo.descripcion + "</td><td style='display: none;'>" + equipo.unidad + "</td><td style='display: none;'>" + equipo.depreciacion + "</td></tr>";
				tabla.append(new_row);
		    });

		    $('#tabla_equipos').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'language': {
			        "sProcessing":    "Procesando...",
			        "sLengthMenu":    "Mostrar _MENU_ registros",
			        "sZeroRecords":   "No se encontraron resultados",
			        "sEmptyTable":    "Ningún dato disponible en esta tabla",
			        "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			        "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
			        "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
			        "sInfoPostFix":   "",
			        "sSearch":        "Buscar:",
			        "sUrl":           "",
			        "sInfoThousands":  ",",
			        "sLoadingRecords": "Cargando...",
			        "oPaginate": {
			            "sFirst":    "Primero",
			            "sLast":    "Último",
			            "sNext":    ">",
			            "sPrevious": "<"
			        },
			        "oAria": {
			            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			        }
			    }
			});
		})
		.catch(function(error) {
			console.log('Error buscar equipos: ' + error);
		});
	} else if(tipo == 'materiales') {
		fetch('/api/buscar_todos/materiales')
		.then(response => response.json())
		.then(data => {
			data.forEach(material => {
				var new_row = "<tr><td>" + material.codigo + "</td><td>" + material.descripcion + "</td><td style='display: none;'>" + material.unidad + "</td><td style='display: none;'>" + material.desperdicio + "</td></tr>";
				tabla.append(new_row);
		    });

		    $('#tabla_materiales').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'language': {
			        "sProcessing":    "Procesando...",
			        "sLengthMenu":    "Mostrar _MENU_ registros",
			        "sZeroRecords":   "No se encontraron resultados",
			        "sEmptyTable":    "Ningún dato disponible en esta tabla",
			        "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			        "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
			        "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
			        "sInfoPostFix":   "",
			        "sSearch":        "Buscar:",
			        "sUrl":           "",
			        "sInfoThousands":  ",",
			        "sLoadingRecords": "Cargando...",
			        "oPaginate": {
			            "sFirst":    "Primero",
			            "sLast":    "Último",
			            "sNext":    ">",
			            "sPrevious": "<"
			        },
			        "oAria": {
			            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			        }
			    }
			});
		})
		.catch(function(error) {
			console.log('Error buscar materiales: ' + error);
		});
	} else if(tipo == 'personal') {
		fetch('/api/buscar_todos/personal')
		.then(response => response.json())
		.then(data => {
			data.forEach(personal => {
				var new_row = "<tr><td>" + personal.codigo + "</td><td>" + personal.descripcion + "</td><td style='display: none;'>" + personal.unidad + "</td></tr>";
				tabla.append(new_row);
		    });

		    $('#tabla_personal').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'language': {
			        "sProcessing":    "Procesando...",
			        "sLengthMenu":    "Mostrar _MENU_ registros",
			        "sZeroRecords":   "No se encontraron resultados",
			        "sEmptyTable":    "Ningún dato disponible en esta tabla",
			        "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			        "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
			        "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
			        "sInfoPostFix":   "",
			        "sSearch":        "Buscar:",
			        "sUrl":           "",
			        "sInfoThousands":  ",",
			        "sLoadingRecords": "Cargando...",
			        "oPaginate": {
			            "sFirst":    "Primero",
			            "sLast":    "Último",
			            "sNext":    ">",
			            "sPrevious": "<"
			        },
			        "oAria": {
			            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			        }
			    }
			});
		})
		.catch(function(error) {
			console.log('Error buscar personal: ' + error);
		});
	} else if(tipo == 'partidas') {
		fetch('/api/buscar_todos/partidas')
		.then(response => response.json())
		.then(data => {
			data.forEach(partida => {
				var new_row = "<tr><td>" + partida.codigo + "</td><td>" + partida.descripcion + "</td><td style='display: none;'>" + partida.nombre  + "</td><td style='display: none;'>" + partida.unidad + "</td></tr>";
				tabla.append(new_row);
		    });

		    $('#tabla_partidas').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'language': {
			        "sProcessing":    "Procesando...",
			        "sLengthMenu":    "Mostrar _MENU_ registros",
			        "sZeroRecords":   "No se encontraron resultados",
			        "sEmptyTable":    "Ningún dato disponible en esta tabla",
			        "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			        "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
			        "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
			        "sInfoPostFix":   "",
			        "sSearch":        "Buscar:",
			        "sUrl":           "",
			        "sInfoThousands":  ",",
			        "sLoadingRecords": "Cargando...",
			        "oPaginate": {
			            "sFirst":    "Primero",
			            "sLast":    "Último",
			            "sNext":    ">",
			            "sPrevious": "<"
			        },
			        "oAria": {
			            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			        }
			    }
			});
		})
		.catch(function(error) {
			console.log('Error buscar partidas: ' + error);
		});
	} else if(tipo == 'areas') {
		fetch('/api/buscar_todos/areas')
		.then(response => response.json())
		.then(data => {
			data.forEach(area => {
				var new_row = "<tr><td>" + area.codigo + "</td><td>" + area.descripcion + "</td><td>" + area.tasa_dolar + "</td></tr>";
				tabla.append(new_row);
		    });

		    $('#tabla_areas').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'language': {
			        "sProcessing":    "Procesando...",
			        "sLengthMenu":    "Mostrar _MENU_ registros",
			        "sZeroRecords":   "No se encontraron resultados",
			        "sEmptyTable":    "Ningún dato disponible en esta tabla",
			        "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			        "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
			        "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
			        "sInfoPostFix":   "",
			        "sSearch":        "Buscar:",
			        "sUrl":           "",
			        "sInfoThousands":  ",",
			        "sLoadingRecords": "Cargando...",
			        "oPaginate": {
			            "sFirst":    "Primero",
			            "sLast":    "Último",
			            "sNext":    ">",
			            "sPrevious": "<"
			        },
			        "oAria": {
			            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			        }
			    }
			});
		})
		.catch(function(error) {
			console.log('Error buscar areas: ' + error);
		});
	} else if(tipo == 'precio_materiales') {
		fetch('/api/buscar_todos/precio_materiales', {
			method: 'POST',
			body: JSON.stringify({
			    area_codigo: arg1
    		})
    	})
		.then(response => response.json())
		.then(data => {
			if(arg1 == '') {
				data.forEach(material => {
					var new_row = "<tr><td>" + material.codigo + "</td><td>" + material.descripcion + "</td><td>" + material.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-precio-material' value='' disabled> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn-precio-guardar' type='button' style='display: none;'>Guardar</button> </div> </div> </td>" + "<td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-precio-bs-material' value='' disabled> </div> </td></tr>";
					tabla.append(new_row);
			    });
			} else {
				data.forEach(material => {
					var new_row = "<tr><td>" + material.codigo + "</td><td>" + material.descripcion + "</td><td>" + material.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-precio-material' value='" + material.precio + "'> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn-precio-guardar' type='button' style='display: none;'>Guardar</button> </div> </div> </td>" + "<td> <div class='input-group'> <input type='text' class='form-control form-control-xs input-precio-bs-material' value='" + numberCurrencyFormat(material.precio_bs) + "' disabled> </div> </td></tr>";
					tabla.append(new_row);
			    });
			}

			$('#tabla_precio_materiales').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'columnDefs': [{'orderable': false, 'targets': [3, 4]}],
				'language': {
				    "sProcessing":    "Procesando...",
				    "sLengthMenu":    "Mostrar _MENU_ registros",
				    "sZeroRecords":   "No se encontraron resultados",
				    "sEmptyTable":    "Ningún dato disponible en esta tabla",
				    "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				    "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
				    "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
				    "sInfoPostFix":   "",
				    "sSearch":        "Buscar:",
				    "sUrl":           "",
				    "sInfoThousands":  ",",
				    "sLoadingRecords": "Cargando...",
				    "oPaginate": {
				        "sFirst":    "Primero",
				        "sLast":    "Último",
				        "sNext":    ">",
				        "sPrevious": "<"
				    },
				    "oAria": {
				        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
				    }
				}
			});
		})
		.catch(function(error) {
			console.log('Error buscar precio materiales: ' + error);
		});
	} else if(tipo == 'precio_equipos') {
		fetch('/api/buscar_todos/precio_equipos', {
			method: 'POST',
			body: JSON.stringify({
			    area_codigo: arg1
    		})
    	})
		.then(response => response.json())
		.then(data => {
			if(arg1 == '') {
				data.forEach(equipo => {
					var new_row = "<tr><td>" + equipo.codigo + "</td><td>" + equipo.descripcion + "</td><td>" + equipo.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-depreciacion-equipo' value='" + equipo.depreciacion + "'> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn-depreciacion-guardar' type='button' style='display: none;'>Guardar</button> </div> </div>" + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-precio-equipo' value='' disabled> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn-precio-guardar' type='button' style='display: none;'>Guardar</button> </div> </div> </td>" + "<td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-precio-bs-equipo' value='' disabled> </div> </td></tr>";
					tabla.append(new_row);
			    });
			} else {
				data.forEach(equipo => {
					var new_row = "<tr><td>" + equipo.codigo + "</td><td>" + equipo.descripcion + "</td><td>" + equipo.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-depreciacion-equipo' value='" + equipo.depreciacion + "'> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn-depreciacion-guardar' type='button' style='display: none;'>Guardar</button> </div> </div>" + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-precio-equipo' value='" + equipo.precio + "'> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn-precio-guardar' type='button' style='display: none;'>Guardar</button> </div> </div> </td>" + "<td> <div class='input-group'> <input type='text' class='form-control form-control-xs input-precio-bs-equipo' value='" + numberCurrencyFormat(equipo.precio_bs) + "' disabled> </div> </td></tr>";
					tabla.append(new_row);
			    });
			}

			$('#tabla_precio_equipos').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'columnDefs': [{'orderable': false, 'targets': [3, 4, 5]}],
				'language': {
				    "sProcessing":    "Procesando...",
				    "sLengthMenu":    "Mostrar _MENU_ registros",
				    "sZeroRecords":   "No se encontraron resultados",
				    "sEmptyTable":    "Ningún dato disponible en esta tabla",
				    "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				    "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
				    "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
				    "sInfoPostFix":   "",
				    "sSearch":        "Buscar:",
				    "sUrl":           "",
				    "sInfoThousands":  ",",
				    "sLoadingRecords": "Cargando...",
				    "oPaginate": {
				        "sFirst":    "Primero",
				        "sLast":    "Último",
				        "sNext":    ">",
				        "sPrevious": "<"
				    },
				    "oAria": {
				        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			        }
			    }
			});
		})
		.catch(function(error) {
			console.log('Error buscar precio equipos: ' + error);
		});
	} else if(tipo == 'precio_personal') {
		fetch('/api/buscar_todos/precio_personal', {
			method: 'POST',
			body: JSON.stringify({
			    area_codigo: arg1
    		})
    	})
		.then(response => response.json())
		.then(data => {
			if(arg1 == '') {
				data.forEach(personal => {
					var new_row = "<tr><td>" + personal.codigo + "</td><td>" + personal.descripcion + "</td><td>" + personal.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-precio-personal' value='' disabled> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn-precio-guardar' type='button' style='display: none;'>Guardar</button> </div> </div> </td>" + "<td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-precio-bs-personal' value='' disabled> </div> </td></tr>";
					tabla.append(new_row);
			    });
			} else {
				data.forEach(personal => {
					var new_row = "<tr><td>" + personal.codigo + "</td><td>" + personal.descripcion + "</td><td>" + personal.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input-precio-personal' value='" + personal.precio + "'> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn-precio-guardar' type='button' style='display: none;'>Guardar</button> </div> </div> </td>" + "<td> <div class='input-group'> <input type='text' class='form-control form-control-xs input-precio-bs-personal' value='" + numberCurrencyFormat(personal.precio_bs) + "' disabled> </div> </td></tr>";
					tabla.append(new_row);
			    });
			}

			$('#tabla_precio_personal').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'columnDefs': [{'orderable': false, 'targets': [3, 4]}],
				'language': {
			        "sProcessing":    "Procesando...",
			        "sLengthMenu":    "Mostrar _MENU_ registros",
			        "sZeroRecords":   "No se encontraron resultados",
			        "sEmptyTable":    "Ningún dato disponible en esta tabla",
			        "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			        "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
			        "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
			        "sInfoPostFix":   "",
			        "sSearch":        "Buscar:",
			        "sUrl":           "",
			        "sInfoThousands":  ",",
			        "sLoadingRecords": "Cargando...",
			        "oPaginate": {
			            "sFirst":    "Primero",
			            "sLast":    "Último",
			            "sNext":    ">",
			            "sPrevious": "<"
			        },
			        "oAria": {
			            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			        }
			    }
			});
		})
		.catch(function(error) {
			console.log('Error buscar precio personal: ' + error);
		});
	} else if(tipo == 'analisis_partidas') {
		fetch('/api/buscar_todos/analisis_partidas', {
			method: 'POST',
			body: JSON.stringify({
			    partida_codigo: arg1,
			    partida_buscar: arg2
    		})
    	})
		.then(response => response.json())
		.then(data => {
			if(arg1 != '') {
				if(arg2 == 'materiales') {
					data.forEach(material => {
						var new_row = "<tr><td>" + material.codigo + "</td><td>" + material.descripcion + "</td><td>" + material.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input_cantidad_materiales' value='" + material.cantidad + "'> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn_cantidad_materiales_guardar' type='button' style='display: none;'>Guardar</button> </div> </div>" + "</td><td>" + "<button type='button'  class='btn btn-dark btn-sm btn_eliminar_materiales'>Eliminar</button>" + "</td></tr>";
						tabla.append(new_row);
				    });
				} else if(arg2 == 'equipos') {
					data.forEach(equipo => {
						var new_row = "<tr><td>" + equipo.codigo + "</td><td>" + equipo.descripcion + "</td><td>" + equipo.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input_cantidad_equipos' value='" + equipo.cantidad + "'> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn_cantidad_equipos_guardar' type='button' style='display: none;'>Guardar</button> </div> </div>" + "</td><td>" + "<button type='button'  class='btn btn-dark btn-sm btn_eliminar_equipos'>Eliminar</button>" + "</td></tr>";
						tabla.append(new_row);
				    });
				} else if(arg2 == 'personal') {
					data.forEach(personal => {
						var new_row = "<tr><td>" + personal.codigo + "</td><td>" + personal.descripcion + "</td><td>" + personal.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input_cantidad_personal' value='" + personal.cantidad + "'> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn_cantidad_personal_guardar' type='button' style='display: none;'>Guardar</button> </div> </div>" + "</td><td>" + "<button type='button'  class='btn btn-dark btn-sm btn_eliminar_personal'>Eliminar</button>" + "</td></tr>";
						tabla.append(new_row);
				    });
				}
			}
			
			$('#tabla_analisis_' + arg2).DataTable({
				'dom': 'Bfrtip',
				'buttons': [{
					'text': 'Agregar ' + arg2,
					'attr':  {'id': 'btn_agregar_' + arg2},
					'action':
						function(e) {
							if(!(document.querySelector('#partida_codigo').value.split('|')[0]) == '') {
								if(arg2 == 'materiales') {
									$('#agregarMaterialesModal').modal('show');
								} else if(arg2 == 'equipos') {
									$('#agregarEquiposModal').modal('show');
								} else if(arg2 == 'personal') {
									$('#agregarPersonalModal').modal('show');
								}
							} else {
								bootstrapAlert('Por favor seleccione una partida!', 'info');
							}
						}
				}],
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'columnDefs': [{'orderable': false, 'targets': [4]}],
				'language': {
				    "sProcessing":    "Procesando...",
				    "sLengthMenu":    "Mostrar _MENU_ registros",
				    "sZeroRecords":   "No se encontraron resultados",
				    "sEmptyTable":    "Ningún dato disponible en esta tabla",
				    "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				    "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
				    "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
				    "sInfoPostFix":   "",
				    "sSearch":        "Buscar:",
				    "sUrl":           "",
				    "sInfoThousands":  ",",
				    "sLoadingRecords": "Cargando...",
				    "oPaginate": {
				        "sFirst":    "Primero",
				        "sLast":    "Último",
				        "sNext":    ">",
				        "sPrevious": "<"
				    },
				    "oAria": {
				        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
				    }
				}
			});
		})
		.catch(function(error) {
			console.log('Error buscar analisis partidas: ' + error);
		});
	} else if(tipo == 'obras') {
		fetch('/api/buscar_todos/obras')
		.then(response => response.json())
		.then(data => {
			data.forEach(obra => {
				var new_row = "<tr><td>" + obra.codigo + "</td><td>" + obra.descripcion + "</td><td style='display: none;'>" + obra.area + "</td><td style='display: none;'>" + obra.bono_alimentacion + "</td><td style='display: none;'>" + obra.f_administracion + "</td><td style='display: none;'>" + obra.f_utilidad + "</td><td style='display: none;'>" + obra.grado_dificultad + "</td><td style='display: none;'>" + obra.tarifa_transporte + "</td><td style='display: none;'>" + obra.fcas + "</td><td style='display: none;'>" + obra.iva + "</td></tr>";
				tabla.append(new_row);
		    });

		    $('#tabla_obras').DataTable({
				'dom': 'frtip',
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'language': {
			        "sProcessing":    "Procesando...",
			        "sLengthMenu":    "Mostrar _MENU_ registros",
			        "sZeroRecords":   "No se encontraron resultados",
			        "sEmptyTable":    "Ningún dato disponible en esta tabla",
			        "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
			        "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
			        "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
			        "sInfoPostFix":   "",
			        "sSearch":        "Buscar:",
			        "sUrl":           "",
			        "sInfoThousands":  ",",
			        "sLoadingRecords": "Cargando...",
			        "oPaginate": {
			            "sFirst":    "Primero",
			            "sLast":    "Último",
			            "sNext":    ">",
			            "sPrevious": "<"
			        },
			        "oAria": {
			            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			        }
			    }
			});
		})
		.catch(function(error) {
			console.log('Error buscar obras: ' + error);
		});
	} else if(tipo == 'presupuestos') {
		fetch('/api/buscar_todos/presupuestos', {
			method: 'POST',
			body: JSON.stringify({
			    obra_codigo: arg1
    		})
    	})
		.then(response => response.json())
		.then(data => {
			if(arg1 != '') {
				data.forEach(partida => {
					var new_row = "<tr><td>" + partida.codigo + "</td><td>" + partida.nombre + "</td><td>" + partida.unidad + "</td><td> <div class='input-group'> <input type='number' class='form-control form-control-xs input_cantidad_partidas' value='" + partida.cantidad + "'> <div class='input-group-append'> <button class='btn btn-outline-secondary form-control-xs btn_cantidad_partidas_guardar' type='button' style='display: none;'>Guardar</button> </div> </div>" + "</td><td>" + "<button type='button'  class='btn btn-dark btn-sm btn_eliminar_partidas'>Eliminar</button>" + "</td></tr>";
					tabla.append(new_row);
				});
			}
			
			$('#tabla_presupuestos').DataTable({
				'dom': 'Bfrtip',
				'buttons': [{
					'text': 'Agregar partidas',
					'attr':  {'id': 'btn_agregar_partidas'},
					'action':
						function(e) {
							if(!(document.querySelector('#obra_codigo').value.split('|')[0]) == '') {
								$('#agregarPartidasModal').modal('show');
							} else {
								bootstrapAlert('Por favor seleccione una obra!', 'info');
							}
						}
				}],
				'responsive': true,
				'pageLength': 50,
				'scrollY': '200px',
				'scrollCollapse': true,
				'columnDefs': [{'orderable': false, 'targets': [4]}],
				'language': {
				    "sProcessing":    "Procesando...",
				    "sLengthMenu":    "Mostrar _MENU_ registros",
				    "sZeroRecords":   "No se encontraron resultados",
				    "sEmptyTable":    "Ningún dato disponible en esta tabla",
				    "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
				    "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
				    "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
				    "sInfoPostFix":   "",
				    "sSearch":        "Buscar:",
				    "sUrl":           "",
				    "sInfoThousands":  ",",
				    "sLoadingRecords": "Cargando...",
				    "oPaginate": {
				        "sFirst":    "Primero",
				        "sLast":    "Último",
				        "sNext":    ">",
				        "sPrevious": "<"
				    },
				    "oAria": {
				        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
				        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
				    }
				}
			});
		})
		.catch(function(error) {
			console.log('Error buscar presupuestos: ' + error);
		});
	}

	setTimeout(() => {
		update_table_event(tipo);
	}, 120);
}

function update_table_event(tipo) {
	if(tipo == 'equipos') {
		$('#tabla_equipos tbody').on('click', 'tr', function () {
	        if(!($(this).children().eq(0).hasClass('dataTables_empty'))) {
	        	if(!($(this).hasClass('selected'))) {
	            $(this).siblings().removeClass('selected');
	            $(this).addClass('selected');
	        }
		        document.querySelector('#equipo_codigo').value = this.cells[0].innerHTML;
		    	document.querySelector('#equipo_descripcion').value = this.cells[1].innerHTML;
		    	document.querySelector('#equipo_unidad').value = this.cells[2].innerHTML;
	        }
	    });
	} else if(tipo == 'materiales') {
		$('#tabla_materiales tbody').on('click', 'tr', function () {
			if(!($(this).children().eq(0).hasClass('dataTables_empty'))) {
				if(!($(this).hasClass('selected'))) {
	            $(this).siblings().removeClass('selected');
	            $(this).addClass('selected');
	        }
		        document.querySelector('#material_codigo').value = this.cells[0].innerHTML;
		    	document.querySelector('#material_descripcion').value = this.cells[1].innerHTML;
		    	document.querySelector('#material_unidad').value = this.cells[2].innerHTML;
		    	document.querySelector('#material_desperdicio').value = this.cells[3].innerHTML;
			}
	    });
	} else if(tipo == 'personal') {
		$('#tabla_personal tbody').on('click', 'tr', function () {
			if(!($(this).children().eq(0).hasClass('dataTables_empty'))) {
				if(!($(this).hasClass('selected'))) {
	            $(this).siblings().removeClass('selected');
	            $(this).addClass('selected');
	        }
		        document.querySelector('#personal_codigo').value = this.cells[0].innerHTML;
		    	document.querySelector('#personal_descripcion').value = this.cells[1].innerHTML;
		    	document.querySelector('#personal_unidad').value = this.cells[2].innerHTML;
			}
	    });
	} else if(tipo == 'partidas') {
		$('#tabla_partidas tbody').on('click', 'tr', function () {
			if(!($(this).children().eq(0).hasClass('dataTables_empty'))) {
				if(!($(this).hasClass('selected'))) {
	            $(this).siblings().removeClass('selected');
	            $(this).addClass('selected');
	        }
		        document.querySelector('#partida_codigo').value = this.cells[0].innerHTML;
		    	document.querySelector('#partida_descripcion').value = this.cells[1].innerHTML;
		    	document.querySelector('#partida_nombre').value = this.cells[2].innerHTML;
		    	document.querySelector('#partida_unidad').value = this.cells[3].innerHTML;
			}
	    });
	} else if(tipo == 'areas') {
		$('#tabla_areas tbody').on('click', 'tr', function () {
			if(!($(this).children().eq(0).hasClass('dataTables_empty'))) {
				if(!($(this).hasClass('selected'))) {
	            $(this).siblings().removeClass('selected');
	            $(this).addClass('selected');
	        }
		        document.querySelector('#area_codigo').value = this.cells[0].innerHTML;
		    	document.querySelector('#area_descripcion').value = this.cells[1].innerHTML;
		    	document.querySelector('#area_tasa').value = this.cells[2].innerHTML;
			}
	    });
	} else if(tipo == 'precio_materiales') {
		$('#tabla_precio_materiales tbody').off('click', '.btn-precio-guardar');
		$('#tabla_precio_materiales tbody').on('click', '.btn-precio-guardar', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/modificar/precio_materiales', {
			    method: 'POST',
			    body: JSON.stringify({
			        area_codigo: document.querySelector('#area_codigo').value.split('|')[0],
			        material_codigo: row.cells[0].innerHTML,
			        material_precio: row.cells[3].querySelector('.input-precio-material').value
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Precio de material guardado con éxito!', 'success');
			    	row.cells[4].querySelector('.input-precio-bs-material').value = numberCurrencyFormat(row.cells[3].querySelector('.input-precio-material').value * document.querySelector('#area_tasa').value);
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Material o área no está registrado!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para cambiar el precio de materiales!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al guardar el precio del material!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al guardar el precio del material!', 'danger');
				console.log('Error: ' + error);
			});
	    });

	    $('#tabla_precio_materiales tbody').on('focusin', '.input-precio-material', function () {
	    	setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn-precio-guardar').style.display = 'block';
			}, 200);
	    });

	    $('#tabla_precio_materiales tbody').on('focusout', '.input-precio-material', function () {
			setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn-precio-guardar').style.display = 'none';
			}, 200);
	    });
	} else if(tipo == 'precio_equipos') {
		$('#tabla_precio_equipos tbody').off('click', '.btn-precio-guardar');
		$('#tabla_precio_equipos tbody').on('click', '.btn-precio-guardar', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/modificar/precio_equipos', {
			    method: 'POST',
			    body: JSON.stringify({
			        area_codigo: document.querySelector('#area_codigo').value.split('|')[0],
			        equipo_codigo: row.cells[0].innerHTML,
			        equipo_precio: row.cells[4].querySelector('.input-precio-equipo').value
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Precio de equipo guardado con éxito!', 'success');
			    	row.cells[5].querySelector('.input-precio-bs-equipo').value = numberCurrencyFormat(row.cells[4].querySelector('.input-precio-equipo').value * document.querySelector('#area_tasa').value);
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Equipo o área no está registrado!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para cambiar el precio de equipos!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al guardar el precio del equipo!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al guardar el precio del equipo!', 'danger');
				console.log('Error: ' + error);
			});
	    });

	    $('#tabla_precio_equipos tbody').on('focusin', '.input-precio-equipo', function () {
	    	setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn-precio-guardar').style.display = 'block';
			}, 200);
	    });

	    $('#tabla_precio_equipos tbody').on('focusout', '.input-precio-equipo', function () {
			setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn-precio-guardar').style.display = 'none';
			}, 200);
	    });

	    $('#tabla_precio_equipos tbody').off('click', '.btn-depreciacion-guardar');
		$('#tabla_precio_equipos tbody').on('click', '.btn-depreciacion-guardar', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/modificar/depreciacion_equipos', {
			    method: 'POST',
			    body: JSON.stringify({
			        equipo_codigo: row.cells[0].innerHTML,
			        equipo_depreciacion: row.cells[3].querySelector('.input-depreciacion-equipo').value
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Depreciación de equipo guardada con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Equipo no está registrado!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para cambiar la depreciación de equipos!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al guardar la depreciacion del equipo!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al guardar la depreciacion del equipo!', 'danger');
				console.log('Error: ' + error);
			});
	    });

	    $('#tabla_precio_equipos tbody').on('focusin', '.input-depreciacion-equipo', function () {
	    	setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn-depreciacion-guardar').style.display = 'block';
			}, 200);
	    });

	    $('#tabla_precio_equipos tbody').on('focusout', '.input-depreciacion-equipo', function () {
			setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn-depreciacion-guardar').style.display = 'none';
			}, 200);
	    });
	} else if(tipo == 'precio_personal') {
		$('#tabla_precio_personal tbody').off('click', '.btn-precio-guardar');
		$('#tabla_precio_personal tbody').on('click', '.btn-precio-guardar', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/modificar/precio_personal', {
			    method: 'POST',
			    body: JSON.stringify({
			        area_codigo: document.querySelector('#area_codigo').value.split('|')[0],
			        personal_codigo: row.cells[0].innerHTML,
			        personal_precio: row.cells[3].querySelector('.input-precio-personal').value
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Precio de personal guardado con éxito!', 'success');
			    	row.cells[4].querySelector('.input-precio-bs-personal').value = numberCurrencyFormat(row.cells[3].querySelector('.input-precio-personal').value * document.querySelector('#area_tasa').value);
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Personal o área no está registrado!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para cambiar el precio del personal!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al guardar el precio del personal!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al guardar el precio del personal!', 'danger');
				console.log('Error: ' + error);
			});
	    });

	    $('#tabla_precio_personal tbody').on('focusin', '.input-precio-personal', function () {
	    	setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn-precio-guardar').style.display = 'block';
			}, 200);
	    });

	    $('#tabla_precio_personal tbody').on('focusout', '.input-precio-personal', function () {
			setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn-precio-guardar').style.display = 'none';
			}, 200);
	    });
	} else if(tipo == 'analisis_partidas') {
		$('#tabla_materiales_agregar tbody').off('click', '.btn_agregar_materiales');
		$('#tabla_materiales_agregar tbody').on('click', '.btn_agregar_materiales', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/agregar/analisis_partidas', {
			    method: 'POST',
			    body: JSON.stringify({
			        partida_codigo: document.querySelector('#partida_codigo').value.split('|')[0],
			        codigo: row.cells[0].innerHTML,
			        tipo: 'materiales'
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Material agregado a partida con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Partida o material no registrados!', 'warning');
			    } else if(result.error == 'AlreadyExist.') {
			    	bootstrapAlert('Material ya agregado a partida!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al agregar el material a la partida!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al agregar el material a la partida!', 'danger');
				console.log('Error: ' + error);
			});
		});

		$('#tabla_equipos_agregar tbody').off('click', '.btn_agregar_equipos');
		$('#tabla_equipos_agregar tbody').on('click', '.btn_agregar_equipos', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/agregar/analisis_partidas', {
			    method: 'POST',
			    body: JSON.stringify({
			        partida_codigo: document.querySelector('#partida_codigo').value.split('|')[0],
			        codigo: row.cells[0].innerHTML,
			        tipo: 'equipos'
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Equipo agregado a partida con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Partida o equipo no registrados!', 'warning');
			    } else if(result.error == 'AlreadyExist.') {
			    	bootstrapAlert('Equipo ya agregado a partida!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al agregar el equipo a la partida!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al agregar el equipo a la partida!', 'danger');
				console.log('Error: ' + error);
			});
		});

		$('#tabla_personal_agregar tbody').off('click', '.btn_agregar_personal');
		$('#tabla_personal_agregar tbody').on('click', '.btn_agregar_personal', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/agregar/analisis_partidas', {
			    method: 'POST',
			    body: JSON.stringify({
			        partida_codigo: document.querySelector('#partida_codigo').value.split('|')[0],
			        codigo: row.cells[0].innerHTML,
			        tipo: 'personal'
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Personal agregado a partida con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Partida o personal no registrados!', 'warning');
			    } else if(result.error == 'AlreadyExist.') {
			    	bootstrapAlert('Personal ya agregado a partida!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al agregar el personal a la partida!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al agregar el personal a la partida!', 'danger');
				console.log('Error: ' + error);
			});
		});

		$('#tabla_analisis_materiales tbody').off('click', '.btn_eliminar_materiales');
		$('#tabla_analisis_materiales tbody').on('click', '.btn_eliminar_materiales', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/eliminar/analisis_partidas', {
			    method: 'POST',
			    body: JSON.stringify({
			        partida_codigo: document.querySelector('#partida_codigo').value.split('|')[0],
			        codigo: row.cells[0].innerHTML,
			        tipo: 'materiales'
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Material removido de partida con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Partida o material no registrados!', 'warning');
			    } else if(result.error == 'NotExist.') {
			    	bootstrapAlert('Material no agregado a partida!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al eliminar el material de la partida!', 'danger');
			    }

			    fill_table('analisis_partidas', document.querySelector('#partida_codigo').value.split('|')[0], 'materiales');
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al eliminar el material de la partida!', 'danger');
				console.log('Error: ' + error);
			});
		});

		$('#tabla_analisis_equipos tbody').off('click', '.btn_eliminar_equipos');
		$('#tabla_analisis_equipos tbody').on('click', '.btn_eliminar_equipos', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/eliminar/analisis_partidas', {
			    method: 'POST',
			    body: JSON.stringify({
			        partida_codigo: document.querySelector('#partida_codigo').value.split('|')[0],
			        codigo: row.cells[0].innerHTML,
			        tipo: 'equipos'
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Equipo removido de partida con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Partida o equipo no registrados!', 'warning');
			    } else if(result.error == 'NotExist.') {
			    	bootstrapAlert('Equipo no agregado a partida!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al eliminar el equipo de la partida!', 'danger');
			    }

			    fill_table('analisis_partidas', document.querySelector('#partida_codigo').value.split('|')[0], 'equipos');
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al eliminar el equipo de la partida!', 'danger');
				console.log('Error: ' + error);
			});
		});

		$('#tabla_analisis_personal tbody').off('click', '.btn_eliminar_personal');
		$('#tabla_analisis_personal tbody').on('click', '.btn_eliminar_personal', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/eliminar/analisis_partidas', {
			    method: 'POST',
			    body: JSON.stringify({
			        partida_codigo: document.querySelector('#partida_codigo').value.split('|')[0],
			        codigo: row.cells[0].innerHTML,
			        tipo: 'personal'
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Personal removido de partida con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Partida o personal no registrados!', 'warning');
			    } else if(result.error == 'NotExist.') {
			    	bootstrapAlert('Personal no agregado a partida!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al eliminar el personal de la partida!', 'danger');
			    }

			    fill_table('analisis_partidas', document.querySelector('#partida_codigo').value.split('|')[0], 'personal');
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al eliminar el personal de la partida!', 'danger');
				console.log('Error: ' + error);
			});
		});

		$('#tabla_analisis_materiales tbody').off('click', '.btn_cantidad_materiales_guardar');
		$('#tabla_analisis_materiales tbody').on('click', '.btn_cantidad_materiales_guardar', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/modificar/cantidad_materiales', {
			    method: 'POST',
			    body: JSON.stringify({
			        partida_codigo: document.querySelector('#partida_codigo').value.split('|')[0],
			        material_codigo: row.cells[0].innerHTML,
			        material_cantidad: row.cells[3].querySelector('.input_cantidad_materiales').value
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Cantidad de material guardado con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Material o partida no está registrado!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al guardar la cantidad del material!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al guardar la cantidad del material!', 'danger');
				console.log('Error: ' + error);
			});
	    });

		$('#tabla_analisis_materiales tbody').on('focusin', '.input_cantidad_materiales', function () {
	    	setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn_cantidad_materiales_guardar').style.display = 'block';
			}, 200);
	    });

	    $('#tabla_analisis_materiales tbody').on('focusout', '.input_cantidad_materiales', function () {
			setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn_cantidad_materiales_guardar').style.display = 'none';
			}, 200);
	    });

	    $('#tabla_analisis_equipos tbody').off('click', '.btn_cantidad_equipos_guardar');
		$('#tabla_analisis_equipos tbody').on('click', '.btn_cantidad_equipos_guardar', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/modificar/cantidad_equipos', {
			    method: 'POST',
			    body: JSON.stringify({
			        partida_codigo: document.querySelector('#partida_codigo').value.split('|')[0],
			        equipo_codigo: row.cells[0].innerHTML,
			        equipo_cantidad: row.cells[3].querySelector('.input_cantidad_equipos').value
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Cantidad de equipo guardado con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Equipo o partida no está registrado!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al guardar la cantidad del equipo!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al guardar la cantidad del equipo!', 'danger');
				console.log('Error: ' + error);
			});
	    });

	    $('#tabla_analisis_equipos tbody').on('focusin', '.input_cantidad_equipos', function () {
	    	setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn_cantidad_equipos_guardar').style.display = 'block';
			}, 200);
	    });

	    $('#tabla_analisis_equipos tbody').on('focusout', '.input_cantidad_equipos', function () {
			setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn_cantidad_equipos_guardar').style.display = 'none';
			}, 200);
	    });

	    $('#tabla_analisis_personal tbody').off('click', '.btn_cantidad_personal_guardar');
		$('#tabla_analisis_personal tbody').on('click', '.btn_cantidad_personal_guardar', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/modificar/cantidad_personal', {
			    method: 'POST',
			    body: JSON.stringify({
			        partida_codigo: document.querySelector('#partida_codigo').value.split('|')[0],
			        personal_codigo: row.cells[0].innerHTML,
			        personal_cantidad: row.cells[3].querySelector('.input_cantidad_personal').value
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Cantidad de personal guardado con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Personal o partida no está registrado!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al guardar la cantidad del personal!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al guardar la cantidad del personal!', 'danger');
				console.log('Error: ' + error);
			});
	    });

	    $('#tabla_analisis_personal tbody').on('focusin', '.input_cantidad_personal', function () {
	    	setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn_cantidad_personal_guardar').style.display = 'block';
			}, 200);
	    });

	    $('#tabla_analisis_personal tbody').on('focusout', '.input_cantidad_personal', function () {
			setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn_cantidad_personal_guardar').style.display = 'none';
			}, 200);
	    });
	} else if(tipo == 'obras') {
		$('#tabla_obras tbody').on('click', 'tr', function () {
	        if(!($(this).children().eq(0).hasClass('dataTables_empty'))) {
	        	if(!($(this).hasClass('selected'))) {
	            $(this).siblings().removeClass('selected');
	            $(this).addClass('selected');
	        }
		        document.querySelector('#obra_codigo').value = this.cells[0].innerHTML;
		    	document.querySelector('#obra_descripcion').value = this.cells[1].innerHTML;
		    	document.querySelector('#obra_area').value = this.cells[2].innerHTML;
		    	document.querySelector('#obra_alimentacion').value = this.cells[3].innerHTML;
		    	document.querySelector('#obra_administracion').value = this.cells[4].innerHTML;
		    	document.querySelector('#obra_utilidad').value = this.cells[5].innerHTML;
		    	document.querySelector('#obra_dificultad').value = this.cells[6].innerHTML;
		    	document.querySelector('#obra_transporte').value = this.cells[7].innerHTML;
		    	document.querySelector('#obra_fcas').value = this.cells[8].innerHTML;
		    	document.querySelector('#obra_iva').value = this.cells[9].innerHTML;
	        }
	    });
	} else if(tipo == 'presupuestos') {
		$('#tabla_partidas_agregar tbody').off('click', '.btn_agregar_partidas');
		$('#tabla_partidas_agregar tbody').on('click', '.btn_agregar_partidas', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/agregar/presupuestos', {
			    method: 'POST',
			    body: JSON.stringify({
			        obra_codigo: document.querySelector('#obra_codigo').value.split('|')[0],
			        partida_codigo: row.cells[0].innerHTML
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Partida agregada a obra con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Obra o partida no registradas!', 'warning');
			    } else if(result.error == 'AlreadyExist.') {
			    	bootstrapAlert('Partida ya agregada a obra!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al agregar la partida a la obra!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al agregar la partida a la obra!', 'danger');
				console.log('Error: ' + error);
			});
		});

		$('#tabla_presupuestos tbody').off('click', '.btn_eliminar_partidas');
		$('#tabla_presupuestos tbody').on('click', '.btn_eliminar_partidas', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/eliminar/presupuestos', {
			    method: 'POST',
			    body: JSON.stringify({
			        obra_codigo: document.querySelector('#obra_codigo').value.split('|')[0],
			        partida_codigo: row.cells[0].innerHTML
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Partida removida de obra con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Obra o partida no registradas!', 'warning');
			    } else if(result.error == 'NotExist.') {
			    	bootstrapAlert('Partida no agregada a obra!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al eliminar la partida de la obra!', 'danger');
			    }

			    fill_table('presupuestos', document.querySelector('#obra_codigo').value.split('|')[0], null);
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al eliminar la partida de la obra!', 'danger');
				console.log('Error: ' + error);
			});
		});

		$('#tabla_presupuestos tbody').off('click', '.btn_cantidad_partidas_guardar');
		$('#tabla_presupuestos tbody').on('click', '.btn_cantidad_partidas_guardar', function () {
			var row = $(this).parents('tr')[0];

			fetch('/api/modificar/cantidad_partidas', {
			    method: 'POST',
			    body: JSON.stringify({
			        obra_codigo: document.querySelector('#obra_codigo').value.split('|')[0],
			        partida_codigo: row.cells[0].innerHTML,
			        partida_cantidad: row.cells[3].querySelector('.input_cantidad_partidas').value
			    })
			})
			.then(response => response.json())
			.then(result => {
			    if(!result.error) {
			    	bootstrapAlert('Cantidad de partida guardada con éxito!', 'success');
			    } else if(result.error == 'DoesNotExist.') {
			    	bootstrapAlert('Obra o partida no está registrada!', 'warning');
			    } else if(result.error == 'No permission.') {
			    	bootstrapAlert('Tu cuenta no tiene permisos para hacer esto!', 'info');
			    } else {
			    	bootstrapAlert('Ha ocurrido un error al guardar la cantidad de la partida!', 'danger');
			    }
			})
			.catch(function(error) {
				bootstrapAlert('Ha ocurrido un error al guardar la cantidad de la partida!', 'danger');
				console.log('Error: ' + error);
			});
	    });

		$('#tabla_presupuestos tbody').on('focusin', '.input_cantidad_partidas', function () {
	    	setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn_cantidad_partidas_guardar').style.display = 'block';
			}, 200);
	    });

	    $('#tabla_presupuestos tbody').on('focusout', '.input_cantidad_partidas', function () {
			setTimeout(() => {
				$(this).parents('tr')[0].querySelector('.btn_cantidad_partidas_guardar').style.display = 'none';
			}, 200);
	    });
	}        
}