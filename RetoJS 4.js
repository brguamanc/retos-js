// Mensaje de bienvenida
console.log("¡Bienvenido!");

// Saludo con el nombre usando console.log
var nombre = "TuNombre";
console.log("¡Hola, " + nombre + "!");

// Saludo con el nombre usando alert
var nombre = "TuNombre";
alert("¡Hola, " + nombre + "!");

// Pregunta al usuario y muestra la respuesta en la consola
var respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Tu lenguaje favorito es: " + respuesta);

// Suma de dos valores y muestra el resultado
var valor1 = 5;
var valor2 = 3;
var resultadoSuma = valor1 + valor2;
console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultadoSuma + ".");

// Resta de dos valores y muestra el resultado
var valor1 = 8;
var valor2 = 4;
var resultadoResta = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es igual a " + resultadoResta + ".");

// Verifica la edad del usuario y muestra un mensaje apropiado
var edad = prompt("Ingrese su edad:");
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Verifica si un número es positivo, negativo o cero
var numero = prompt("Ingrese un número:");
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// Muestra los números del 1 al 10 utilizando un bucle while
var contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Determina si una nota es aprobada o reprobada
var nota = 8;
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// Genera y muestra un número aleatorio entre 0 y 1
var numeroAleatorio = Math.random();
console.log("Número aleatorio: " + numeroAleatorio);

// Genera y muestra un número entero aleatorio entre 1 y 10
var numeroEnteroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Número entero aleatorio entre 1 y 10: " + numeroEnteroAleatorio);

// Genera y muestra un número entero aleatorio entre 1 y 1000
var numeroEnteroAleatorio1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número entero aleatorio entre 1 y 1000: " + numeroEnteroAleatorio1000);
