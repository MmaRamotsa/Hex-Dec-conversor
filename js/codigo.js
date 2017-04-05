// ======================================================================
// Página creada por : Maria Antonia Martínez García
// Fecha: 04/04/2017
// Versión : v1.0
// Evaluación del módulo MF0951_2.
// ======================================================================
$(document).ready(function() {
	//Se valida el valor del dato en el momento en que pierde el foco.
  $("#datohex").blur(validaDato);

  //Al enviar se hace la conversión
  $("#enviar").click(convierteADecimal);
});

//Función para validar que el dato intrducido es un valor hexadecimal.
function validaDato(){
	var dato = $("#datohex").val();
	var regExp = /^[0-9A-Fa-f]*?$/;

	if (regExp.test(dato) && dato!=""){
		//Si el dato es correcto debemos mostrar el mensaje de que está bien
		$("#msgexito")
			.css("visibility","visible")
			.fadeIn(1000)
			.fadeOut(4000);
		//Se habilita el botón de envío
		$("#enviar").removeAttr("disabled");
	} else {
		//Se muestra el mensaje de error
		$("#msgerror").addClass("grande");
		$("#msgerror")
			.fadeIn()
			.fadeOut()
			.fadeIn()
			.fadeOut(3000);
		//Se vuelve a colocar el foco en el campo de entrada
		$("#datohex").focus();
		//Se oculta el input que muestra el resultado de la conversión
		$("#convers").slideUp();
		//Se inhabilita el botón de envío
		$("#enviar").attr("disabled", true);
	}
}
//Convierte el dato a dcimal y lo muestra en pantalla.
function convierteADecimal(){
	var dato =$("#datohex").val();
	$("#datodec").html(parseInt(dato,16));
	$("#convers").slideDown();
	$("#datohex").focus();
}