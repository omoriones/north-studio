$(document).ready(function() {

	//Show/hide hamburger menu
	mostrarOcultarHamburger();

});

$(window).resize(function() {

	//Show/hide hamburger menu
	mostrarOcultarHamburger();

});


//Show/hide hamburger menu
function mostrarOcultarHamburger() {
	if (window.matchMedia('screen and (max-width: 1024px)').matches) {
		$(".hamburger").show();
		$("#nav-bar-options").hide();
	} else {
		$(".hamburger").hide();
		$("#nav-bar-options").show();
	}
}
