$(document).ready(function() {

	//Mostrar ocultar hamburger
	mostrarOcultarHamburger();

});

$(window).resize(function() {

	//Mostrar ocultar hamburger
	mostrarOcultarHamburger();

});


//Mostrar ocultar hamburger
function mostrarOcultarHamburger() {
	if (window.matchMedia('screen and (max-width: 1024px)').matches) {
		$(".hamburger").show();
		$("#nav-bar-options").hide();
	} else {
		$(".hamburger").hide();
		$("#nav-bar-options").show();
	}
}

//Validacion Formulario
function validateForm() {

    var emptyFields = 11;

    if ($("#cp").val() == "") {
			$("#cp").addClass("input-red");
      $("#error-message-cp").removeClass("hidden");
    } else {
      $("#error-message-cp").addClass("hidden");
      emptyFields = --emptyFields;
    }

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

    if ($("#calle-numero").val() == "") {
      $("#error-message-calle-numero").removeClass("hidden");
			$("#calle-numero").addClass("input-red");
    } else {
      $("#error-message-calle-numero").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if ($("#superficie").val() == "") {
      $("#error-message-superficie").removeClass("hidden");
			$("#superficie").addClass("input-red");
    } else {
      $("#error-message-superficie").addClass("hidden");
      emptyFields = --emptyFields;
    }

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

    if (!$("input:radio[name='parking']").is(":checked")) {
      $("#error-message-parking").removeClass("hidden");
			$("label[for='parking-si']").addClass("label-radio-empty");
			$("label[for='parking-no']").addClass("label-radio-empty");
    } else {
      $("#error-message-parking").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='terraza']").is(":checked")) {
      $("#error-message-terraza").removeClass("hidden");
			$("label[for='terraza-si']").addClass("label-radio-empty");
			$("label[for='terraza-no']").addClass("label-radio-empty");
    } else {
      $("#error-message-terraza").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='ascensor']").is(":checked")) {
      $("#error-message-ascensor").removeClass("hidden");
			$("label[for='ascensor-si']").addClass("label-radio-empty");
			$("label[for='ascensor-no']").addClass("label-radio-empty");
    } else {
      $("#error-message-ascensor").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if ($("#fecha-compra option:selected").val() == "") {
			$("#error-message-fecha-compra").removeClass("hidden");
			$("#fecha-compra").addClass("input-red");
    } else {
      $("#error-message-fecha-compra").addClass("hidden");
      emptyFields = --emptyFields;
    }

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

    if (emptyFields > 0) {
      return false;
    } else {
      window.location = "email.html";
    }

}


//Validacion Email
function validateEmail() {
  var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!filter.test($('#email').val())) {
		$("#email").addClass("input-red");
    $("#error-message-12").removeClass("hidden");
    return false;
  } else {
    window.location = "success.html";
  }
}


function isFilled(id) {
	if (!$('#'+id).val()) {
		//alert('VACIO');
	} else {
		//alert("LLENO");
			$('#'+id).removeClass("input-red");
      $("#error-message-"+id).addClass("hidden");
	}
}

function checkTipoVivienda() {

    if ($("input:radio[name='tipo-vivienda']").is(":checked")) {
			//alert('One radio in each group is checked.');
			$("label[for='tipo-vivienda-piso']").removeClass("label-radio-empty");
			$("label[for='tipo-vivienda-casa-chalet']").removeClass("label-radio-empty");
			$("label[for='tipo-vivienda-estudio']").removeClass("label-radio-empty");
			$("label[for='tipo-vivienda-atico']").removeClass("label-radio-empty");
			$("label[for='tipo-vivienda-duplex']").removeClass("label-radio-empty");
      $("#error-message-tipo-vivienda").addClass("hidden");
    } else {
			//alert('Please select one option in each question.');
		}

}

function checkEstadoPropiedad() {

    if ($("input:radio[name='estado-propiedad']").is(":checked")) {
			//alert('One radio in each group is checked.');
			$("label[for='estado-propiedad-buen-estado']").removeClass("label-radio-empty");
			$("label[for='estado-propiedad-reforma-ligera']").removeClass("label-radio-empty");
			$("label[for='estado-propiedad-reforma-integral']").removeClass("label-radio-empty");
			$("label[for='estado-propiedad-obra-nueva']").removeClass("label-radio-empty");
      $("#error-message-estado-propiedad").addClass("hidden");
    } else {
			//alert('Please select one option in each question.');
		}

}

function checkVenderPropiedad() {

    if ($("input:radio[name='vender-propiedad']").is(":checked")) {
			//alert('One radio in each group is checked.');
			$("label[for='vender-propiedad-antes-posible']").removeClass("label-radio-empty");
			$("label[for='vender-propiedad-3-meses']").removeClass("label-radio-empty");
			$("label[for='vender-propiedad-3-a-6-meses']").removeClass("label-radio-empty");
			$("label[for='vender-propiedad-sin-prisa']").removeClass("label-radio-empty");
      $("#error-message-vender-propiedad").addClass("hidden");
    } else {
			//alert('Please select one option in each question.');
		}

}

function checkNumeroHabitaciones() {

    if ($("input:radio[name='num-habitaciones']").is(":checked")) {
			//alert('One radio in each group is checked.');
			$("label[for='num-habitaciones-1']").removeClass("label-radio-empty");
			$("label[for='num-habitaciones-2']").removeClass("label-radio-empty");
			$("label[for='num-habitaciones-3']").removeClass("label-radio-empty");
			$("label[for='num-habitaciones-4']").removeClass("label-radio-empty");
			$("label[for='num-habitaciones-5-mas']").removeClass("label-radio-empty");
      $("#error-message-num-habitaciones").addClass("hidden");
    } else {
			//alert('Please select one option in each question.');
		}

}

function checkParking() {

    if ($("input:radio[name='parking']").is(":checked")) {
			//alert('One radio in each group is checked.');
			$("label[for='parking-si']").removeClass("label-radio-empty");
			$("label[for='parking-no']").removeClass("label-radio-empty");
      $("#error-message-parking").addClass("hidden");
    } else {
			//alert('Please select one option in each question.');
		}

}

function checkTerraza() {

    if ($("input:radio[name='terraza']").is(":checked")) {
			//alert('One radio in each group is checked.');
			$("label[for='terraza-si']").removeClass("label-radio-empty");
			$("label[for='terraza-no']").removeClass("label-radio-empty");
      $("#error-message-terraza").addClass("hidden");
    } else {
			//alert('Please select one option in each question.');
		}

}

function checkAscensor() {

    if ($("input:radio[name='ascensor']").is(":checked")) {
			//alert('One radio in each group is checked.');
			$("label[for='ascensor-si']").removeClass("label-radio-empty");
			$("label[for='ascensor-no']").removeClass("label-radio-empty");
      $("#error-message-ascensor").addClass("hidden");
    } else {
			//alert('Please select one option in each question.');
		}

}

function checkFechaCompra() {

		if (!$("#fecha-compra option:selected").val() == "") {
			$("#error-message-fecha-compra").addClass("hidden");
			$("#fecha-compra").removeClass("input-red");
    }

}

/*function actualizarRespuestas(id) {

	var resp = $("#respuestas").text();

	if ($('#'+id).val()) {
		resp = parseInt(resp) + 1;
	} else {
		resp = parseInt(resp) - 1;
	}

	$("#respuestas").text(resp);

}*/

function emptyForm() {
	window.location = "form.html";
}
