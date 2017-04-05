// ======================================================================
// Página creada por : Maria Antonia Martínez García
// Fecha: 04/04/2017
// Versión : v1.0
// Evaluación del módulo MF0951_2.
// ======================================================================
$(document).ready(function() {
  //Al enviar se hace la  validación
  $("#enviar").click(function(){
  	var dato = $("#datohex").val();
		var regExp = /^[0-9A-Fa-f]*?$/;

		if (regExp.test(dato) && dato!=""){
			//Si el dato es correcto debemos mostrar el mensaje de que está bien
			muestraMsjExito();
			//Si el dato es correcto se hace la conversión a decimal
			convierteADecimal();
		} else {
			//Se muestra el mensaje de error
			muestraMsjError();
			//Se vuelve a colocar el foco en el campo de entrada
			$("#datohex").focus();
			//Se oculta el campo que muestra el resultado de la conversión
			$("#convers").hide();
		}
  });

});

//Convierte el dato a dcimal y lo muestra en pantalla.
function convierteADecimal(){
	var dato =$("#datohex").val();
	$("#datodec").html(parseInt(dato,16));
	$("#convers").slideDown();
	$("#datohex").focus();
}
//Funciones para mostrar los mensajes de éxito y error.
function muestraMsjError(){
	$("#msgerror").addClass("grande");
	$("#msgerror")
		.fadeIn()
		.fadeOut()
		.fadeIn()
		.fadeOut(3000);
}

function muestraMsjExito(){
	$("#msgexito")
	.css("visibility","visible")
	.fadeIn(1000)
	.fadeOut(4000);
}