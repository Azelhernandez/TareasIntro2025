// Mensaje de bienvenida
console.log("¡Bienvenido!");

				let nombre = prompt("Por favor, introduce tu nombre:");

				let mesNacimiento = parseInt(prompt("Por favor, introduce tu mes de nacimiento (1-12):"));

				let diaNacimiento = parseInt(prompt("Por favor, introduce tu día de nacimiento:"));

				let nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Obtener el nombre del mes correspondiente
let nombreMes = nombresMeses[mesNacimiento - 1]; 

// Mostrar los datos en una alerta
alert("Nombre: " + nombre + "\nMes de Nacimiento: " + nombreMes + "\nDía de Nacimiento: " + diaNacimiento);

switch (mesNacimiento) {

	case 1: if (diaNacimiento <=21) {
  
 					alert ("Tu signo zodiacal es Capricornio");
 }        else {
					alert ("Tu signo zodiacal es Acuario");
 }	
  			break;
        
  case 2: if (diaNacimiento >=20) {
  
 					alert ("Tu signo zodiacal es Piscis");
 }        else {
					alert ("Tu signo zodiacal es Acuario");
 }
  			break;
        
  case 3:	if (diaNacimiento >=21) {
  
 					alert ("Tu signo zodiacal es Aries");
 }        else {
					alert ("Tu signo zodiacal es Piscis");
 }
  			break;
        
  case 4:	if (diaNacimiento >=21) {
  
 					alert ("Tu signo zodiacal es Tauro");
 }        else {
					alert ("Tu signo zodiacal es Aries");
 }
  			break;
        
 case 5:	if (diaNacimiento >=21) {
  
 					alert ("Tu signo zodiacal es Geminis");
 }        else {
					alert ("Tu signo zodiacal es Tauro");
 }
  			break;
        
 case 6:	if (diaNacimiento >=21) {
  
 					alert ("Tu signo zodiacal es Cáncer");
 }        else {
					alert ("Tu signo zodiacal es Geminis");
 }
  			break;
        
  case 7:	if (diaNacimiento >=23) {
  
 					alert ("Tu signo zodiacal es Leo");
 }        else {
					alert ("Tu signo zodiacal es Cáncer");
 }
  			break;
        
  case 8:	if (diaNacimiento >=24) {
  
 					alert ("Tu signo zodiacal es Virgo");
 }        else {
					alert ("Tu signo zodiacal es Leo");
 }
  			break;
        
  case 9:	if (diaNacimiento >=23) {
  
 					alert ("Tu signo zodiacal es Libra");
 }        else {
					alert ("Tu signo zodiacal es Virgo");
 }
  			break;
        
   case 10:	if (diaNacimiento >=24) {
  
 					alert ("Tu signo zodiacal es Escorpio");
 }        else {
					alert ("Tu signo zodiacal es Libra");
 }
  			break;
        
  case 11:	if (diaNacimiento >=23) {
  
 					alert ("Tu signo zodiacal es Sagitario");
 }        else {
					alert ("Tu signo zodiacal es Escorpio");
 }
  			break;
        
 case 12:	if (diaNacimiento >=22) {
  
 					alert ("Tu signo zodiacal es Capricornio");
 }        else {
					alert ("Tu signo zodiacal es Sagitario");
 }
  			break;
       
       

}