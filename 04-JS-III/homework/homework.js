// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  array = [1, 2, 3]
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var array = [1, 7, "sech" ,"ete"]
  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var suma = [];
  array = [7, 8, 9, 10];
   for(i = 0; i< array.length; i++)
  {
   suma[i] = array[i] + 1;
  }
  return suma[i]
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 var array = [5, "sapo", 1781]
 array.push(elemento)
 return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array=[]
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabras = ["hello ", " world!"]
  var devuelto = palabras[0] + palabras[1];
  return devuelto
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var array = ["el", "si", 343, 6565, "elemento"]
  for(i = 0; i <array.length; i++)
  if("elemento" === array[i])
  {
  return true
  }
  else
  {
  return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
 var suma = 0;
 var numeros = [34, 1, 1, 2];
 for(var i = 0; i < numeros.length; i++)
 {
 suma = numeros[i] + suma
 }
 return suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultadostest = [5, 5, 4, 2,7];
  var suma = 0;
  for(var i = 0; i <resultadostest.length; i++)
  {
  var resultado = resultadostest[i];
  suma =+ suma +  resultado
  resultado;
  }
  var resultado_final = suma / resultadostest.length
  return resultado_final;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = 0;
  var numeros = [1, 5, 7, 100, 30, 10]
  
  for(var i = 0; i < numeros.length; i++)
  {
      if (numeros[i] > maximo)
         maximo = numeros[i]  
  }
  if(numeros[i] > maximo)
  {
    return numeros[i];
  }
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicar = 2;
  if(arguments.length < 1)
  {
    return 0;
  }
  else if(arguments.length < 2 &&  arguments.length > 0)
  {
    return console.log(arguments);
  }
  else
  {
    arguments;
    return arguments; 
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var arreglo=[5, 100, 233,45645,676,657,68,987,67,8686,856,86,86,86,86,86,86,86,86,86,86,86,86,76,7] 
  var contador = 0;
for(var i = 0; i <arreglo.length; i++)
{
  if(arreglo[i] > 19)
  {
    var total = arreglo[i] - arreglo[arreglo.length]
    contador++
  }
}
return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  var numeroDeDia = 1
if(numeroDeDia === 2 || 3 || 4 || 5 || 6)
{
  return "Es fin de semana"
}
else
{
  return "Es dia laboral"
}   
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var n = 90
  var resultado = n.toString()
  if(resultado.charAt(0) === "9")
  {
  console.log(true)
  }
  else
  {
  console.log(false)
   }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  arreglo = [23, 23, 23, 78, 23, 23, 23, 23];
  for(var i = 0; i <arreglo.length -1; i++)
  {
    if (arreglo[i] !== arreglo[i+1])
    {
      return false
    }
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
nuevo_array= [];
array = ["enero", "marzo", "Diciembre", "octubre", "septiembre" ,"Junio"]; 
for(var i = 0; i<array.length; i++)
{
  if("enero" === array[i])
  {
     nuevo_array.push("Enero");
  }
  else if("marzo" === array[i])
  {
     nuevo_array.push("Marzo");
  }
  else if("Diciembre" === array[i])
  {
     nuevo_array.push("Diciembre");
  }
  else if("Junio" === array[i])
  {
     nuevo_array.push("Junio");
  }
  else
  {
     return "No se encontraron los meses o valor " + array[i];
  }
}
  return "de los datos pedidos estos son los encontrado " + nuevo_array;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var nuevo_array = [];
var array = [0, 56, 87, 132,187, 200, 99, 7, 13, 9, 128];
for(var i = 0; i < array.length; i++)
{
if(array[i]>100 && array[i]<201)
{
 nuevo_array.push(array[i])
}

}
return nuevo_array;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  array = []
  var numero = -10;
  for(var i = 0; i < 10; i++)
  {
    numero = numero + 2;
     if(numero < 10)
    {
      
      array.push(numero); 
    } 
    else if(numero >= 10)
    {
     "se interrumpio la ejecucion"
      break;
    }
  }
  return array
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  array = []
var numero = -10;
for(var i = 0; i < 10; i++)
{
  numero = numero + 2;
   if(numero < 5)
  {
    array.push(numero); 
    console.log(array)
  } 
  else if(numero >= 5)
  {
    continue;
  }
  return array
}
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
