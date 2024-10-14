// estructurasDeControl.js

// Ejercicio 1: Condicionales si-si no
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
  if (numero % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}

// Imprimir
verificarParidad(7); // "El número es impar"
verificarParidad(10); // "El número es par"

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
  if (edad < 18) {
    console.log("Menor de edad");
  } else if (edad >= 18 && edad <= 65) {
    console.log("Adulto");
  } else {
    console.log("Adulto mayor");
  }
}

// Imprimir
clasificarEdad(10); // "Menor de edad"
clasificarEdad(30); // "Adulto"
clasificarEdad(70); // "Adulto mayor"

// Ejercicio 3: Bucles mientras
// Instrucción: Crea una función que reciba un número entero positivo y utiliza un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
}

// Imprimir
cuentaRegresiva(5); // Imprime: 5, 4, 3, 2, 1, 0

// Ejercicio 4: Bucles hacer-mientras
// Instrucción: Escribe una función que imprime "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
  let contador = 0;
  do {
    console.log("Estoy aprendiendo JavaScript");
    contador++;
  } while (contador < 5);
}

// Imprimir
repetirMensaje();

// Ejercicio 5: Bucle para
// Instrucción: Escribe una función que reciba un número entero positivo y utiliza un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
  for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Imprimir
imprimirPares(10); // Imprime: 0, 2, 4, 6, 8, 10

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
  for (let i = 1; i <= 10; i++) {
    if (i === 6) {
      break;
    }
    console.log(i);
  }
}

// Imprimir
detenerEnSeis(); // Imprime: 1, 2, 3, 4, 5

// Ejercicio 7: Uso de continuar
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
}

// Imprimir
saltarCinco(); // Imprime: 1, 2, 3, 4, 6, 7, 8, 9, 10

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
  let diaSemana;
  switch (dia) {
    case 1:
      diaSemana = "Lunes";
      break;
    case 2:
      diaSemana = "Martes";
      break;
    case 3:
      diaSemana = "Miércoles";
      break;
    case 4:
      diaSemana = "Jueves";
      break;
    case 5:
      diaSemana = "Viernes";
      break;
    case 6:
      diaSemana = "Sábado";
      break;
    case 7:
      diaSemana = "Domingo";
      break;
    default:
      diaSemana = "Número inválido";
  }
  return diaSemana;
}

// Imprimir
console.log(obtenerDiaSemana(1)); // "Lunes"
console.log(obtenerDiaSemana(5)); // "Viernes"
console.log(obtenerDiaSemana(7)); // "Domingo"
console.log(obtenerDiaSemana(10)); // "Número inválido"

// Ejercicio 9: Switch con casos múltiples
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
  let esVocal = false;
  switch (letra.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      esVocal = true;
      break;
    default:
      esVocal = false;
  }
  return esVocal;
}

// Ejemplo de uso
console.log(esVocal('a')); // true
console.log(esVocal('b')); // false
console.log(esVocal('E')); // true
console.log(esVocal('x')); // false

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    console.log("Todos los números son positivos");
  } else if (a < 0 || b < 0 || c < 0) {
    console.log("Al menos uno de los números es negativo");
  } else if (a < 0 && b < 0 && c < 0) {
    console.log("Todos los números son negativos");
  } else {
    console.log("Hay una combinación de positivos y negativos");
  }
}

// Imprimir
evaluarNumeros(1, 2, 3); // "Todos los números son positivos"
evaluarNumeros(-1, 2, 3); // "Al menos uno de los números es negativo"
evaluarNumeros(-1, -2, -3); // "Todos los números son negativos"

// Exportar todas las funciones
export {
  verificarParidad,
  clasificarEdad,
  cuentaRegresiva,
  repetirMensaje,
  imprimirPares,
  detenerEnSeis,
  saltarCinco,
  obtenerDiaSemana,
  esVocal,
  evaluarNumeros,
};
