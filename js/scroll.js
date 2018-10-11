$(document).ready(function() {

	$("#cp").focusout( function() {
		$('html, body').animate({
        scrollTop: $("#question-02").offset().top - $(window).height()/4
    }, 800);
	});

	$("input:radio[name='tipo-vivienda']").click(function() {
    $('html, body').animate({
        scrollTop: $("#question-03").offset().top - $(window).height()/4
    }, 800);
	});

	$("input:radio[name='num-habitaciones']").click(function() {
    $('html, body').animate({
        scrollTop: $("#question-04-03").offset().top - $(window).height()/4
    }, 800);
	});

	$("input:radio[name='parking']").click(function() {
    $('html, body').animate({
        scrollTop: $("#question-04-04").offset().top - $(window).height()/4
    }, 800);
	});

	$("input:radio[name='terraza']").click(function() {
    $('html, body').animate({
        scrollTop: $("#question-04-05").offset().top - $(window).height()/4
    }, 800);
	});

	$("input:radio[name='ascensor']").click(function() {
    $('html, body').animate({
        scrollTop: $("#question-05").offset().top - $(window).height()/4
    }, 800);
	});

	$("#fecha-compra").change(function() {
    $('html, body').animate({
        scrollTop: $("#question-06").offset().top - $(window).height()/4
    }, 800);
	});

	$("input:radio[name='estado-propiedad']").click(function() {
    $('html, body').animate({
        scrollTop: $("#question-07").offset().top - $(window).height()/4
    }, 800);
	});

	$("input:radio[name='vender-propiedad']").click(function() {
    $('html, body').animate({
        scrollTop: $("#question-end").offset().top - $(window).height()/4
    }, 800);
	});

});
