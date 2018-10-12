//Validate email
function validateEmail() {
  var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!filter.test($('#email').val())) {
		$("#email").addClass("input-red");
    $("#error-message-email").removeClass("hidden");
    return false;
  } else {
    window.location = "success.html";
  }
}
