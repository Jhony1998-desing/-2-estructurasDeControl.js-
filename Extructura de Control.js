// estructurasDeControl.js
// Ejercicio 1: Condicionales si-si no
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function  verificarParidad ( numero )  {
    // Tu código aquí
     si  ( numero  %  2  ===  0 )  {
      consola . log ( "El número es par" ) ;
    }  demás  {
      consola . log ( "El número es impar" ) ;
    }
  }

  // Imprimir
  verificarParImpar ( 7 ) ;   // "El número es impar"
  verificarParImpar ( 10 ) ;  // "El número es par"

}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function  clasificarEdad ( edad )  {
    // Tu código aquí
    si  ( edad  <  18 )  {
    consola . log ( "Menor de edad" ) ;
  }  else  if  ( edad  >=  18  &&  edad  <=  65 )  {
    consola .log ( "Adulto " ) ;
  }  demás  {
    consola . log ( "Adulto mayor" ) ;
  }
}
// Imprimir
determinarCategoriaEdad ( 10 ) ;   // "Menor de edad"
determinarCategoriaEdad ( 30 ) ;   // "Adulto"
determinarCategoriaEdad ( 70 ) ;   // "Adulto alcalde"
}

}

// Ejercicio 3: Bucles mientras
// Instrucción: Crea una función que reciba un número entero positivo y utiliza un bucle ` while` para imprimir todos los números desde ese número hasta 0.
function  cuentaRegresiva ( numero )  {
    // Tu código aquí
    //Función
función  imprimirHastaCero ( numero )  {
  mientras  ( numero  >=  0 )  {
    consola .log ( numero ) ;​
    numero -- ;
  }
}
// Imprimir
imprimirHastaCero ( 5 ) ;  // Imprime: 5, 4, 3, 2, 1, 0
}
 deje que  el contador  =  0 ;
  hacer  {
    consola . iniciar sesión ( "Estoy aprendiendo JavaScript" ) ;
    contador ++ ;
  }  mientras  ( contador  <  5 ) ;
}

// Ejercicio 4: Bucles hacer-mientras
// Instrucción: Escribe una función que imprime "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do- while`.
función  repetirMensaje ( )  {
    // Tu código aquí
    deje que  el contador  =  0 ;
  hacer  {
    consola . iniciar sesión ( "Estoy aprendiendo JavaScript" ) ;
    contador ++ ;
  }  mientras  ( contador  <  5 ) ;
}


}

// Imprimir
imprimirMensaje ( ) ;
// Ejercicio 5: Bucle para
// Instrucción: Escribe una función que reciba un número entero positivo y utiliza un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function  imprimirPares ( numero )  {
    // Tu código aquí
     para  ( sea  i  =  0 ;  i  <=  numero ;  i ++ )  {
    si  ( i  %  2  ===  0 )  {
      consola .log ( i ) ;​
    }
  }
}

// Imprimir
imprimirNumerosPares ( 10 ) ;  // Imprime: 0, 2, 4, 6, 8, 10

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
función  detenerEnSeis ( )  {
    // Tu código aquí

  para  ( sea  i  =  1 ;  i  <=  10 ;  i ++ )  {
    si  ( i  ===  6 )  {
      romper ;
    }
    consola .log ( i ) ;​
  }
}

// Imprimir
detenerEnSeis ( ) ;  // Imprime: 1, 2, 3, 4, 5

// Ejercicio 7: Uso de continuar
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
función  saltarCinco ( )  {
    // Tu código aquí
    para  ( sea  i  =  1 ;  i  <=  10 ;  i ++ )  {
    si  ( i  ===  5 )  {
      continuar ;
    }
    consola .log ( i ) ;​
  }
}

// Imprimir
saltarCinco ( ) ;  // Imprime: 1, 2, 3, 4, 6, 7, 8, 9, 10

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function  obtenerDiaSemana ( dia )  {
    // Tu código aquí
  deja  dia ;
  interruptor  ( numero )  {
    caso  1 :
      dia  =  "Lunes" ;
      romper ;
    caso  2 :
      dia  =  "martes" ;
      romper ;
    caso  3 :
      dia  =  "Miércoles" ;
      romper ;
    caso  4 :
      dia  =  "Jueves" ;
      romper ;
    caso  5 :
      dia  =  "Viernes" ;
      romper ;
    caso  6 :
      dia  =  "Sábado" ;
      romper ;
    caso  7 :
      dia  =  "Domingo" ;
      romper ;
    por defecto :
      dia  =  "Número inválido" ;
  }
   dia de retorno ;
}

// Imprimir
consola . log ( obtenerDiaDeLaSemana ( 1 ) ) ;  // "Lunes"
consola . log ( obtenerDiaDeLaSemana ( 5 ) ) ;  // "Viernes"
consola . log ( obtenerDiaDeLaSemana ( 7 ) ) ;  // "Domingo"
consola . log ( obtenerDiaDeLaSemana ( 10 ) ) ;  // "Número inválido"


// Ejercicio 9: Switch con casos múltiples
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una voz. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
función  esVocal ( letra )  {
    // Tu código aquí
    deje  que esVocal  =  falso ;
  cambiar  ( caracter . toLowerCase ( ) )  {
    caso  'a' :
    caso  'e' :
    caso  'i' :
    caso  'o' :
    caso  'u' :
      esVocal  =  verdadero ;
      romper ;
    por defecto :
      esVocal  =  falso ;
  }
  devolver  esVocal ;
}

// Ejemplo de uso
consola .log ( esVocal ( ' a ' ) ) ; // verdadero 
consola .log ( esVocal ( ' b' ) ) ; // falso 
consola . log ( esVocal ( 'E' ) ) ;  // verdadero
consola .log ( esVocal ( ' x' ) ) ; // falso 

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
función  evaluarNumeros ( a ,  b ,  c )  {
    // Tu código aquí
    si  ( a  >  0  &&  b  >  0  &&  c  >  0 )  {
    consola . log ( "Todos los números son positivos" ) ;
  }  de lo contrario  si  ( a  <  0  ||  b  <  0  ||  c  <  0 )  {
    consola . log ( "Al menos uno de los números es negativo" ) ;
  }  de lo contrario  si  ( a  <  0  &&  b  <  0  &&  c  <  0 )  {
    consola . log ( "Todos los numeros son negativos" ) ;
  }  demás  {
    consola . log ( "Hay una combinación de positivos y negativos" ) ;
  }
}

// Imprimir
evaluarNumeros ( 1 ,  2 ,  3 ) ;     // "Todos los números son positivos"
evaluarNumeros ( -1 , 2 , 3 ) ;​ // "Al menos uno de los números es negativo"     
evaluarNumeros ( -1 , -2 , -3 ) ;​​​ // "Todos los números son negativos"   

// Exportar todas las funciones
exportar  {
    verificarParidad ,
    clasificarEdad ,
    cuentaRegresiva ,
    repetirMensaje ,
    imprimirPares ,
    detenerEnSeis ,
    saltarCinco ,
    obtenerDiaSemana ,
    esVocal ,
    evaluarNumeros ,
} ;
Pie de página
© 2024 GitHub, In
