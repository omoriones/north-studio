$(document).ready(function() {

	var speedScrolling = 800;

	/* From question 1 to 2 */
	$("#cp").focusout( function() {
		var middleScreen = $(window).height()/4;
		if ($('#cp').val()) {
			$('html, body').animate({
	        scrollTop: $("#question-02").offset().top - middleScreen
	    }, speedScrolling);
		}
	});

	/* From question 2 to 3 */
	$("input:radio[name='tipo-vivienda']").click(function() {
		var middleScreen = $(window).height()/4;
    $('html, body').animate({
        scrollTop: $("#question-03-01").offset().top - middleScreen
    }, speedScrolling);
	});

	/* From question 3.1 to question 3.2 */
	$("#calle-numero").focusout( function() {
		var middleScreen = $(window).height()/4;
		if ($('#calle-numero').val()) {
			$('html, body').animate({
					scrollTop: $("#question-03-02").offset().top - middleScreen
			}, speedScrolling);
		}
	});

	/* From question 3.2 to question 3.3 */
	$("#planta").change( function() {
		var middleScreen = $(window).height()/4;
		if ($('#planta').val()) {
			$('html, body').animate({
					scrollTop: $("#question-03-03").offset().top - middleScreen
			}, speedScrolling);
		}
	});

	/* From question 3.3 to question 3.4 */
	$("#bloque").focusout( function() {
		var middleScreen = $(window).height()/4;
		if ($('#bloque').val()) {
			$('html, body').animate({
					scrollTop: $("#question-03-04").offset().top - middleScreen
			}, speedScrolling);
		}
	});

	/* From question 3.4 to question 3.5 */
	$("#escalera").focusout( function() {
		var middleScreen = $(window).height()/4;
		if ($('#escalera').val()) {
			$('html, body').animate({
					scrollTop: $("#question-03-05").offset().top - middleScreen
			}, speedScrolling);
		}
	});

	/* From question 3.5 to question 4 */
	$("#puerta").focusout( function() {
		var middleScreen = $(window).height()/4;
		if ($('#puerta').val()) {
			$('html, body').animate({
					scrollTop: $("#question-04-01").offset().top - middleScreen
			}, speedScrolling);
		}
	});

	/* From question 4.1 to question 4.2 */
	$("#superficie").focusout( function() {
		var middleScreen = $(window).height()/4;
		if ($('#superficie').val()) {
			$('html, body').animate({
					scrollTop: $("#question-04-02").offset().top - middleScreen
			}, speedScrolling);
		}
	});

	/* From question 4.2 to question 4.3 */
	$("input:radio[name='num-habitaciones']").click(function() {
		var middleScreen = $(window).height()/4;
    $('html, body').animate({
        scrollTop: $("#question-04-03").offset().top - middleScreen
    }, speedScrolling);
	});

	/* From question 4.3 to question 4.4 */
	$("input:radio[name='parking']").click(function() {
		var middleScreen = $(window).height()/4;
    $('html, body').animate({
        scrollTop: $("#question-04-04").offset().top - middleScreen
    }, speedScrolling);
	});

	/* From question 4.4 to question 4.5 */
	$("input:radio[name='terraza']").click(function() {
		var middleScreen = $(window).height()/4;
    $('html, body').animate({
        scrollTop: $("#question-04-05").offset().top - middleScreen
    }, speedScrolling);
	});

	/* From question 4.5 to question 5 */
	$("input:radio[name='ascensor']").click(function() {
		var middleScreen = $(window).height()/4;
    $('html, body').animate({
        scrollTop: $("#question-05").offset().top - middleScreen
    }, speedScrolling);
	});

	/* From question 5 to question 6 */
	$("#fecha-compra").change(function() {
		var middleScreen = $(window).height()/4;
    $('html, body').animate({
        scrollTop: $("#question-06").offset().top - middleScreen
    }, speedScrolling);
	});

	/* From question 6 to question 7 */
	$("input:radio[name='estado-propiedad']").click(function() {
		var middleScreen = $(window).height()/4;
    $('html, body').animate({
        scrollTop: $("#question-07").offset().top - middleScreen
    }, speedScrolling);
	});

	/* From question 7 to buttons */
	$("input:radio[name='vender-propiedad']").click(function() {
		var middleScreen = $(window).height()/4;
    $('html, body').animate({
        scrollTop: $("#question-end").offset().top - middleScreen
    }, speedScrolling);
	});

	/* If there is any mandatory question empty, scroll to that question */
	$("#continuar").click(function() {
		var middleScreen = $(window).height()/4;
    $('html, body').animate({
        scrollTop: $('.error-message:not(.hidden):first').offset().top - middleScreen*2
    }, speedScrolling);
	});


});
