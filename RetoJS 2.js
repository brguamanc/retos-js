// Pregunta al usuario qué día de la semana es
var diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
  // Muestra "¡Buen fin de semana!" si es Sábado o Domingo
  alert("¡Buen fin de semana!");
} else {
  // Muestra "¡Buena semana!" para cualquier otro día
  alert("¡Buena semana!");
}

// Verifica si un número ingresado por el usuario es positivo o negativo
var numeroIngresado = prompt("Ingresa un número:");
numeroIngresado = parseFloat(numeroIngresado); // Convierte la entrada a un número de punto flotante

if (numeroIngresado > 0) {
  alert("El número ingresado es positivo.");
} else if (numeroIngresado < 0) {
  alert("El número ingresado es negativo.");
} else {
  alert("El número ingresado es cero.");
}

// Crea un sistema de puntuación para un juego
var puntuacion = prompt("Ingresa tu puntuación:");
puntuacion = parseInt(puntuacion); // Convierte la entrada a un número entero

if (puntuacion >= 100) {
  alert("¡Felicidades, has ganado!");
} else {
  alert("Intenta nuevamente para ganar.");
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta
var saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo actual es: $${saldoCuenta}`);

// Pide al usuario que ingrese su nombre mediante un prompt
var nombreUsuario = prompt("Ingresa tu nombre:");

// Muestra una alerta de bienvenida usando ese nombre
alert(`¡Bienvenido/a, ${nombreUsuario}!`);
