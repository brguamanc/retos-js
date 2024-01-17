// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'
let contador1 = 1;
while (contador1 <= 10) {
  console.log(contador1);
  contador1++;
}

// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'
let contador2 = 10;
while (contador2 >= 0) {
  console.log(contador2);
  contador2--;
}

// Crea un programa de cuenta regresiva
let numeroRegresivo = prompt("Ingresa un número para la cuenta regresiva:");
numeroRegresivo = parseInt(numeroRegresivo);

let contadorRegresivo = 0;
while (contadorRegresivo <= numeroRegresivo) {
  console.log(contadorRegresivo);
  contadorRegresivo++;
}

// Crea un programa de cuenta progresiva
let numeroProgresivo = prompt("Ingresa un número para la cuenta progresiva:");
numeroProgresivo = parseInt(numeroProgresivo);

let contadorProgresivo = 0;
while (contadorProgresivo <= numeroProgresivo) {
  console.log(contadorProgresivo);
  contadorProgresivo++;
}
