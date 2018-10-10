
//Validacion Formulario
function validateForm() {

    var emptyFields = 11;

    if ($("#cp").val() == "") {
			$("#cp").addClass("input-red");
      $("#error-message-01").removeClass("hidden");
    } else {
      $("#error-message-01").addClass("hidden");
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
      $("#error-message-03").removeClass("hidden");
    } else {
      $("#error-message-03").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if ($("#superficie").val() == "") {
			$("#superficie").addClass("input-red");
      $("#error-message-04").removeClass("hidden");
    } else {
      $("#error-message-04").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='num-habitaciones']").is(":checked")) {
			$("#email").addClass("input-red");
      $("#error-message-05").removeClass("hidden");
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
			$("#cp").removeClass("input-red");
      $("#error-message-01").addClass("hidden");

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
