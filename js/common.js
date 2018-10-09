
//Validacion Formulario
function validateForm() {

    var emptyFields = 11;

    if ($("#cp").val() == "") {
      $("#error-message-01").removeClass("hidden");
    } else {
      $("#error-message-01").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='tipo-vivienda']").is(":checked")) {
      $("#error-message-02").removeClass("hidden");
    } else {
      $("#error-message-02").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if ($("#calle-numero").val() == "") {
      $("#error-message-03").removeClass("hidden");
    } else {
      $("#error-message-03").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if ($("#superficie").val() == "") {
      $("#error-message-04").removeClass("hidden");
    } else {
      $("#error-message-04").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='num-habitaciones']").is(":checked")) {
      $("#error-message-05").removeClass("hidden");
    } else {
      $("#error-message-05").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='parking']").is(":checked")) {
      $("#error-message-06").removeClass("hidden");
    } else {
      $("#error-message-06").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='terraza']").is(":checked")) {
      $("#error-message-07").removeClass("hidden");
    } else {
      $("#error-message-07").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='ascensor']").is(":checked")) {
      $("#error-message-08").removeClass("hidden");
    } else {
      $("#error-message-08").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if ($("#fecha-compra").val() === "") {
      $("#error-message-09").removeClass("hidden");
    } else {
      $("#error-message-09").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='estado-propiedad']").is(":checked")) {
      $("#error-message-10").removeClass("hidden");
    } else {
      $("#error-message-10").addClass("hidden");
      emptyFields = --emptyFields;
    }

    if (!$("input:radio[name='vender-propiedad']").is(":checked")) {
      $("#error-message-11").removeClass("hidden");
    } else {
      $("#error-message-11").addClass("hidden");
      emptyFields = --emptyFields;
    }

    /*if (emptyFields > 0) {
      return false;
    } else {
      window.location = "email.html";
    }*/window.location = "email.html";

}


//Validacion Email
function validateEmail() {
  var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!filter.test($('#email').val())) {
    $("#error-message-12").removeClass("hidden");
    return false;
  } else {
    window.location = "success.html";
  }
}
