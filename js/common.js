$(document).ready(function() {

	//SHOW/HIDE HAMBURGUER OPTIONS
	//showHideHamburgerOptions();

});


//SHOW/HIDE HAMBURGUER OPTIONS
function showHideHamburgerOptions() {
	if (window.matchMedia('screen and (max-width: 768px)').matches) {
		$(".hamburger").show();
	} else {
		$(".hamburger").hide();
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
		$("#error-message-02").removeClass("hidden");
			$("label[for='tipo-vivienda-piso']").addClass("label-radio-empty");
			$("label[for='tipo-vivienda-casa-chalet']").addClass("label-radio-empty");
			$("label[for='tipo-vivienda-estudio']").addClass("label-radio-empty");
			$("label[for='tipo-vivienda-atico']").addClass("label-radio-empty");
			$("label[for='tipo-vivienda-duplex']").addClass("label-radio-empty");
    } else {
      $("#error-message-02").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if ($("#calle-numero").val() == "") {
			$("#calle-numero").addClass("input-red");
      $("#error-message-calle-numero").removeClass("hidden");
    } else {
      $("#error-message-calle-numero").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if ($("#superficie").val() == "") {
			$("#superficie").addClass("input-red");
      $("#error-message-superficie").removeClass("hidden");
    } else {
      $("#error-message-superficie").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='num-habitaciones']").is(":checked")) {
      $("#error-message-05").removeClass("hidden");
			$("label[for='num-habitaciones-1']").addClass("label-radio-empty");
			$("label[for='num-habitaciones-2']").addClass("label-radio-empty");
			$("label[for='num-habitaciones-3']").addClass("label-radio-empty");
			$("label[for='num-habitaciones-4']").addClass("label-radio-empty");
			$("label[for='num-habitaciones-5-mas']").addClass("label-radio-empty");
    } else {
      $("#error-message-05").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='parking']").is(":checked")) {
			$("#email").addClass("input-red");
      $("#error-message-06").removeClass("hidden");
    } else {
      $("#error-message-06").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='terraza']").is(":checked")) {
			$("#email").addClass("input-red");
      $("#error-message-07").removeClass("hidden");
    } else {
      $("#error-message-07").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='ascensor']").is(":checked")) {
			$("#email").addClass("input-red");
      $("#error-message-08").removeClass("hidden");
    } else {
      $("#error-message-08").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if ($("#fecha-compra").val() === "") {
			$("#fecha-compra").addClass("input-red");
      $("#error-message-09").removeClass("hidden");
    } else {
      $("#error-message-09").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='estado-propiedad']").is(":checked")) {
      $("#error-message-10").removeClass("hidden");
			$("label[for='estado-propiedad-buen-estado']").addClass("label-radio-empty");
			$("label[for='estado-propiedad-reforma-ligera']").addClass("label-radio-empty");
			$("label[for='estado-propiedad-reforma-integral']").addClass("label-radio-empty");
			$("label[for='estado-propiedad-obra-nueva']").addClass("label-radio-empty");
    } else {
      $("#error-message-10").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='vender-propiedad']").is(":checked")) {
      $("#error-message-11").removeClass("hidden");
			$("label[for='vender-propiedad-antes-posible']").addClass("label-radio-empty");
			$("label[for='vender-propiedad-3-meses']").addClass("label-radio-empty");
			$("label[for='vender-propiedad-3-a-6-meses']").addClass("label-radio-empty");
			$("label[for='vender-propiedad-sin-prisa']").addClass("label-radio-empty");
    } else {
      $("#error-message-11").addClass("hidden");
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
      $("#error-message-02").addClass("hidden");
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
      $("#error-message-10").addClass("hidden");
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
      $("#error-message-11").addClass("hidden");
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
      $("#error-message-05").addClass("hidden");
    } else {
			//alert('Please select one option in each question.');
		}

}
