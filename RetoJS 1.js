// Muestra una alerta de bienvenida
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// Declara variables
var nombre = "Luna";
var edad = 25;
var numeroDeVentas = 50;
var saldoDisponible = 1000;

// Muestra una alerta de error si no se completan todos los campos
alert("¡Error! Completa todos los campos");

// Declara una variable de mensaje de error y muestra una alerta con su valor
var mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

// Pregunta al usuario su nombre usando prompt y almacena en la variable nombre
nombre = prompt("Por favor, ingresa tu nombre:");

// Pide al usuario que ingrese su edad usando prompt y almacena en la variable edad
edad = prompt("Por favor, ingresa tu edad:");


// Verifica si la edad es mayor o igual a 18 y muestra una alerta apropiada
if (edad >= 18) {
  alert("¡Puedes obtener tu licencia de conducir!");
}