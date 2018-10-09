

//Validacion Formulario
function validateForm() {

    if ($("#cp").val() == "") {
        $("#error-message-01").removeClass("hidden");
    } else {
      $("#error-message-01").addClass("hidden");
    }

    if (!$("input:radio[name='tipo-vivienda']").is(":checked")) {
        $("#error-message-02").removeClass("hidden");
    } else {
      $("#error-message-02").addClass("hidden");
    }

    if ($("#calle-numero").val() == "") {
        $("#error-message-03").removeClass("hidden");
    } else {
      $("#error-message-03").addClass("hidden");
    }

    if ($("#superficie").val() == "") {
        $("#error-message-04").removeClass("hidden");
    } else {
      $("#error-message-04").addClass("hidden");
    }

    if (!$("input:radio[name='num-habitaciones']").is(":checked")) {
        $("#error-message-05").removeClass("hidden");
    } else {
      $("#error-message-05").addClass("hidden");
    }

    if (!$("input:radio[name='parking']").is(":checked")) {
        $("#error-message-06").removeClass("hidden");
    } else {
      $("#error-message-06").addClass("hidden");
    }

    if (!$("input:radio[name='terraza']").is(":checked")) {
        $("#error-message-07").removeClass("hidden");
    } else {
      $("#error-message-07").addClass("hidden");
    }

    if (!$("input:radio[name='ascensor']").is(":checked")) {
        $("#error-message-08").removeClass("hidden");
    } else {
      $("#error-message-08").addClass("hidden");
    }

    return false;

}
