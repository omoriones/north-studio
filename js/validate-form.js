
//Validate form
function validateForm() {

		//Number of mandatory fields to continue the form
    var emptyFields = 11;

		//Question 1
		//If "Codigo postal" is empty, show in red. If not, decrease the number of empty mandatory fields
    if ($("#cp").val() == "") {
			$("#cp").addClass("input-red");
      $("#error-message-cp").removeClass("hidden");
    } else {
      $("#error-message-cp").addClass("hidden");
      emptyFields = --emptyFields;
    }


		//Question 2
		//If "Tipo vivienda" is empty, show in red. If not, decrease the number of empty mandatory fields
    if (!$("input:radio[name='tipo-vivienda']").is(":checked")) {
			$("#error-message-tipo-vivienda").removeClass("hidden");
			$("label[for='tipo-vivienda-piso']").addClass("label-radio-empty");
			$("label[for='tipo-vivienda-casa-chalet']").addClass("label-radio-empty");
			$("label[for='tipo-vivienda-estudio']").addClass("label-radio-empty");
			$("label[for='tipo-vivienda-atico']").addClass("label-radio-empty");
			$("label[for='tipo-vivienda-duplex']").addClass("label-radio-empty");
    } else {
      $("#error-message-tipo-vivienda").addClass("hidden");
      emptyFields = --emptyFields;
    }


		//Question 3.1
		//If "Calle y numero" is empty, show in red. If not, decrease the number of empty mandatory fields
    if ($("#calle-numero").val() == "") {
      $("#error-message-calle-numero").removeClass("hidden");
			$("#calle-numero").addClass("input-red");
    } else {
      $("#error-message-calle-numero").addClass("hidden");
      emptyFields = --emptyFields;
    }


		//Question 4.1
		//If "Superficie" is empty, show in red. If not, decrease the number of empty mandatory fields
    if ($("#superficie").val() == "") {
      $("#error-message-superficie").removeClass("hidden");
			$("#superficie").addClass("input-red");
    } else {
      $("#error-message-superficie").addClass("hidden");
      emptyFields = --emptyFields;
    }

		//Question 4.2
		//If "Numero de habitaciones" is empty, show in red. If not, decrease the number of empty mandatory fields
    if (!$("input:radio[name='num-habitaciones']").is(":checked")) {
      $("#error-message-num-habitaciones").removeClass("hidden");
			$("label[for='num-habitaciones-1']").addClass("label-radio-empty");
			$("label[for='num-habitaciones-2']").addClass("label-radio-empty");
			$("label[for='num-habitaciones-3']").addClass("label-radio-empty");
			$("label[for='num-habitaciones-4']").addClass("label-radio-empty");
			$("label[for='num-habitaciones-5-mas']").addClass("label-radio-empty");
    } else {
      $("#error-message-num-habitaciones").addClass("hidden");
      emptyFields = --emptyFields;
    }


		//Question 4.3
		//If "Parking" is empty, show in red. If not, decrease the number of empty mandatory fields
    if (!$("input:radio[name='parking']").is(":checked")) {
      $("#error-message-parking").removeClass("hidden");
			$("label[for='parking-si']").addClass("label-radio-empty");
			$("label[for='parking-no']").addClass("label-radio-empty");
    } else {
      $("#error-message-parking").addClass("hidden");
      emptyFields = --emptyFields;
    }


		//Question 4.4
		//If "Terraza" is empty, show in red. If not, decrease the number of empty mandatory fields
    if (!$("input:radio[name='terraza']").is(":checked")) {
      $("#error-message-terraza").removeClass("hidden");
			$("label[for='terraza-si']").addClass("label-radio-empty");
			$("label[for='terraza-no']").addClass("label-radio-empty");
    } else {
      $("#error-message-terraza").addClass("hidden");
      emptyFields = --emptyFields;
    }


		//Question 4.5
		//If "Ascensor" is empty, show in red. If not, decrease the number of empty mandatory fields
    if (!$("input:radio[name='ascensor']").is(":checked")) {
      $("#error-message-ascensor").removeClass("hidden");
			$("label[for='ascensor-si']").addClass("label-radio-empty");
			$("label[for='ascensor-no']").addClass("label-radio-empty");
    } else {
      $("#error-message-ascensor").addClass("hidden");
      emptyFields = --emptyFields;
    }


		//Question 5
		//If "Fecha de compra" is empty, show in red. If not, decrease the number of empty mandatory fields
    if ($("#fecha-compra option:selected").val() == "") {
			$("#error-message-fecha-compra").removeClass("hidden");
			$("#fecha-compra").addClass("input-red");
    } else {
      $("#error-message-fecha-compra").addClass("hidden");
      emptyFields = --emptyFields;
    }


		//Question 6
		//If "Estado de propiedad" is empty, show in red. If not, decrease the number of empty mandatory fields
    if (!$("input:radio[name='estado-propiedad']").is(":checked")) {
      $("#error-message-estado-propiedad").removeClass("hidden");
			$("label[for='estado-propiedad-buen-estado']").addClass("label-radio-empty");
			$("label[for='estado-propiedad-reforma-ligera']").addClass("label-radio-empty");
			$("label[for='estado-propiedad-reforma-integral']").addClass("label-radio-empty");
			$("label[for='estado-propiedad-obra-nueva']").addClass("label-radio-empty");
    } else {
      $("#error-message-estado-propiedad").addClass("hidden");
      emptyFields = --emptyFields;
    }


		//Question 7
		//If "Vender propiedad" is empty, show in red. If not, decrease the number of empty mandatory fields
    if (!$("input:radio[name='vender-propiedad']").is(":checked")) {
      $("#error-message-vender-propiedad").removeClass("hidden");
			$("label[for='vender-propiedad-antes-posible']").addClass("label-radio-empty");
			$("label[for='vender-propiedad-3-meses']").addClass("label-radio-empty");
			$("label[for='vender-propiedad-3-a-6-meses']").addClass("label-radio-empty");
			$("label[for='vender-propiedad-sin-prisa']").addClass("label-radio-empty");
    } else {
      $("#error-message-vender-propiedad").addClass("hidden");
      emptyFields = --emptyFields;
    }

		//If there is any empty mandatory field, stay on page. If not, go to next page
    if (emptyFields > 0) {
      return false;
    } else {
      window.location = "email.html";
    }

}



//Question 1, 3 and 4.1
//If "Codigo postal", "Calle y numero" and "Superficie" are filled, hide red borders and error message.
function isFilled(id) {
	if ($('#'+id).val()) {
		$('#'+id).removeClass("input-red");
    $("#error-message-"+id).addClass("hidden");
	}
}


//Question 2
//If "Tipo vivienda" is filled, hide red borders and error message.
function checkTipoVivienda() {
    if ($("input:radio[name='tipo-vivienda']").is(":checked")) {
			$("label[for='tipo-vivienda-piso']").removeClass("label-radio-empty");
			$("label[for='tipo-vivienda-casa-chalet']").removeClass("label-radio-empty");
			$("label[for='tipo-vivienda-estudio']").removeClass("label-radio-empty");
			$("label[for='tipo-vivienda-atico']").removeClass("label-radio-empty");
			$("label[for='tipo-vivienda-duplex']").removeClass("label-radio-empty");
      $("#error-message-tipo-vivienda").addClass("hidden");
    }
}


//Question 4.2
//If "Numero de habitaciones" is filled, hide red borders and error message.
function checkNumeroHabitaciones() {
    if ($("input:radio[name='num-habitaciones']").is(":checked")) {
			$("label[for='num-habitaciones-1']").removeClass("label-radio-empty");
			$("label[for='num-habitaciones-2']").removeClass("label-radio-empty");
			$("label[for='num-habitaciones-3']").removeClass("label-radio-empty");
			$("label[for='num-habitaciones-4']").removeClass("label-radio-empty");
			$("label[for='num-habitaciones-5-mas']").removeClass("label-radio-empty");
      $("#error-message-num-habitaciones").addClass("hidden");
    }
}


//Question 4.3
//If "Parking" is filled, hide red borders and error message.
function checkParking() {
    if ($("input:radio[name='parking']").is(":checked")) {
			$("label[for='parking-si']").removeClass("label-radio-empty");
			$("label[for='parking-no']").removeClass("label-radio-empty");
      $("#error-message-parking").addClass("hidden");
    }
}


//Question 4.4
//If "Terraza" is filled, hide red borders and error message.
function checkTerraza() {
    if ($("input:radio[name='terraza']").is(":checked")) {
			$("label[for='terraza-si']").removeClass("label-radio-empty");
			$("label[for='terraza-no']").removeClass("label-radio-empty");
      $("#error-message-terraza").addClass("hidden");
    }
}


//Question 4.5
//If "Ascensor" is filled, hide red borders and error message.
function checkAscensor() {
    if ($("input:radio[name='ascensor']").is(":checked")) {
			$("label[for='ascensor-si']").removeClass("label-radio-empty");
			$("label[for='ascensor-no']").removeClass("label-radio-empty");
      $("#error-message-ascensor").addClass("hidden");
    }
}


//Question 5
//If "Fecha de compra" is filled, hide red borders and error message.
function checkFechaCompra() {
		if (!$("#fecha-compra option:selected").val() == "") {
			$("#error-message-fecha-compra").addClass("hidden");
			$("#fecha-compra").removeClass("input-red");
    }
}


//Question 6
//If "Estado de propiedad" is filled, hide red borders and error message.
function checkEstadoPropiedad() {
    if ($("input:radio[name='estado-propiedad']").is(":checked")) {
			$("label[for='estado-propiedad-buen-estado']").removeClass("label-radio-empty");
			$("label[for='estado-propiedad-reforma-ligera']").removeClass("label-radio-empty");
			$("label[for='estado-propiedad-reforma-integral']").removeClass("label-radio-empty");
			$("label[for='estado-propiedad-obra-nueva']").removeClass("label-radio-empty");
      $("#error-message-estado-propiedad").addClass("hidden");
    }
}


//Question 7
//If "Vender propiedad" is filled, hide red borders and error message.
function checkVenderPropiedad() {
    if ($("input:radio[name='vender-propiedad']").is(":checked")) {
			$("label[for='vender-propiedad-antes-posible']").removeClass("label-radio-empty");
			$("label[for='vender-propiedad-3-meses']").removeClass("label-radio-empty");
			$("label[for='vender-propiedad-3-a-6-meses']").removeClass("label-radio-empty");
			$("label[for='vender-propiedad-sin-prisa']").removeClass("label-radio-empty");
      $("#error-message-vender-propiedad").addClass("hidden");
    }
}

//If button "Cancelar" is pressed, refresh the page
function emptyForm() {
	window.location = "form.html";
}
