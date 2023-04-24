/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
     return array[0];
  }
  //devolverPrimerElemento([77,2,4,5]);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
}
//devolverUltimoElemento([77,2,4,90]);


function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
// obtenerLargoDelArray([77,2,4,90,100]);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = [];
   for (let i=0 ; i< array.length; i++){
      masUno[i]= array[i]+1;
   }
   return masUno;
}

//incrementarPorUno([1,2,3,4,5]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return (array);
}

// agregarItemAlFinalDelArray(['amarillo','verde','rojo'],'gris')


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

//agregarItemAlComienzoDelArray(['amarillo','verde','rojo'],'marron');

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var texto = palabras.join(' ');
   return texto;
}

//dePalabrasAFrase(['Hello', 'world!','Saludos']);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var verificador = array.includes(elemento);
   return verificador;
}

//arrayContiene(['Hello', 'world!','Saludos'],'jose');

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   for (let i=0; i<arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i];
   }

   return suma;
}

//agregarNumeros([1,2,3,4]);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   let promedio = 0;
   for (let i=0; i< resultadosTest.length; i++){
      suma += resultadosTest[i];
   }

   promedio = suma / resultadosTest.length;
   return promedio;
}

//promedioResultadosTest([10,10,16,12]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numMayor = 0;
   for(i=0; i< arrayOfNums.length; i++){
      if (arrayOfNums[i] > numMayor){
         numMayor = arrayOfNums[i];
      }
   }
   return (numMayor);
}

//numeroMasGrande([4,8,7,9,10,15,22,5,6]);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var numeroMult = 1;
   
      if (arguments.length === 0){
         numeroMult = 0;
      }else if (arguments.length ===1){
         numeroMult = arguments[0] * 1;
      } else {
         for(i=0; i< arguments.length; i++){
            numeroMult = numeroMult * arguments[i]
         }
      }
   return (numeroMult);
}

// multiplicarArgumentos();
// multiplicarArgumentos(6);
// multiplicarArgumentos(10,0,10);
// multiplicarArgumentos(2,4,5);

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
   for (i=0 ; i < array.length ; i++){
      if (array[i] > 18){
         contador +=1;
      }
   }
   return contador;
}
//cuentoElementos([10,22,18,19,32]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 7 || numeroDeDia === 1){
      return ('Es fin de semana');
   } else {
      return ('Es dia laboral');
   }
}

// diaDeLaSemana(2);
// diaDeLaSemana(1);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   return num.toString().startsWith('9');
}

// empiezaConNueve(987457);
// empiezaConNueve(3545);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length === 0){
      return true;
   }
   for (let i=1; i<array.length; i++){
      if (array[i] !== array[0]){
         return false;
      }
   }
   return true;
}

// todosIguales([1,5,4,8]);
// todosIguales([2,2,2]);


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var newArray= [];
   var recorre = array.map(index => {
      if (index === 'Enero' || index === 'Marzo' || index === 'Noviembre'){
         newArray.push(index);
      }
   })
   
   if (newArray.length <3 ) {
      return ("No se encontraron los meses pedidos");
    } else {
      return newArray;
    }
}

//mesesDelAño(['junio','enero','mayo','abril']);
//mesesDelAño(['Noviembre','junio','enero','mayo','abril','marzo','marzo']);


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var newArray= []; 
   for (let i=0; i <=60 ;i+=6){
      newArray.push(i);
   }
   return newArray;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var newArray= [];
   array.forEach(num => {
      if (num > 100){
         newArray.push(num);
      }
   });

   return newArray;
}

//mayorACien([100,150,20,40,180,190,123,2]);
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let newArray= []; 
   let suma = 0;
   let i=1;
   nuevoNum = num;

      while (i <=10){
         nuevoNum = nuevoNum +2;
         newArray.push(nuevoNum);
         //suma = suma + nuevoNum;
          if (i === nuevoNum ){
           break;
          }
          i++
      }

      if(newArray.length<10) return ('Se interrumpió la ejecución');
      return newArray;
      
}

//breakStatement(5);

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let newArray= []; 
   let i = 1;
   //nuevoNum = num;

     for (let i=0 ;i <10; i++){
       
       if (i === 5 ){
           continue;
          }
         num = num +2;
         newArray.push(num);
             
     }
            
      
      return newArray;
}

continueStatement(8);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
