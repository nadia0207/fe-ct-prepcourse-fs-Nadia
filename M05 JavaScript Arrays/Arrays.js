/* var listaDeCompras=[];
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga'

var elementodelArray = listaDeCompras[3];
console.log(elementodelArray); //Imprime 'Tomates' porque es la posicion 3
console.log(listaDeCompras.length); //Imprime 4 porque es la cantidad de elemnetos del arreglo  */

//---------------------------*******************

/* var colores = ['amarillo','azul'];
colores.push('rojo');
colores.unshift('verde');
console.log(colores); // imprime [ 'verde', 'amarillo', 'azul', 'rojo' ]
colores.pop();
console.log(colores); //imprime [ 'verde', 'amarillo', 'azul' ]
colores.shift();
console.log(colores); //imprime [ 'amarillo', 'azul' ]
 */

//---------------------------*******************
/* var pintores = ['Picasso','Velasquez','Van Goh','Dali'];
var incluyeDali = pintores.includes('Dali');
console.log(incluyeDali); // imprime true */

//---------------------------*******************
/* var numeros = [1,6,8,9];
var cumplenCondicion = numeros.every(num => {
                       return num > 5;
                       });
console.log(cumplenCondicion); // imprime false porque los 1 no es mayor a 5 y todos deben cumplir la funcion */

//---------------------------*******************
/* var palabra = 'Henri';
var palabraSeparada = palabra.split(''); // (' ') indica que separa por cada caracter
console.log(palabraSeparada); //Imprime [ 'H', 'e', 'n', 'r', 'i' ]
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada); //Imprime [ 'H', 'e', 'n', 'r', 'y' ]
var palabraArreglada = palabraSeparada.join(''); //(' ') indica que junta por cada caracter sin dejar vacios
console.log(palabraArreglada); //Imprime Henry */

//---------------------------*******************
/* var numeros = [1,2,3,4];
numeros.forEach ((num)=> console.log(num)); //Imprime 1 luego 2 lego 3 luego 4 
numeros.forEach((num) => {
                    if (num === 3){
                        console.log(num); //Imprime solo 3 
                }
                })
 */

//---------------------------*******************
/* var numeros = [1,2,3,4];
var masUno =  numeros.map(num => {return num +1})
console.log(masUno) // imprime [ 2, 3, 4, 5 ]
 */

//---------------------------*******************
/* var arr = [1,2,3,4,5]
for (var i=0; i< arr.length; i++){
    console.log(arr[i]);
}; */
//---------------------------*******************

/* function encontrarLetraP(palabra){
    var letras = palabra.split('');

    for (let i=0; i < letras.length ; i++){
        if (letras[i] === 'p'){
            console.log('Si contiene a P'); // Imprime Si contiene P
        }
    }
}

encontrarLetraP('Javasript');
encontrarLetraP('Henry'); */

//---------------------------*******************

/* var arr = [];
while (arr.length < 5){
    arr.push('BOOM');
}

console.log(arr); //Imprime [ 'BOOM', 'BOOM', 'BOOM', 'BOOM', 'BOOM' ] */

//---------------------------*******************

const numeros = [10,20,30,40,50];

const resultado = numeros.map((item,index,array)=>{
    console.log(item);
    console.log(index);
    console.log(array);

    return 1;
});

console.log(resultado);
/*Resultado: console.log(resultado); ---
10
0
[ 10, 20, 30, 40, 50 ]
20
1
[ 10, 20, 30, 40, 50 ]
30
2
[ 10, 20, 30, 40, 50 ]
40
3
[ 10, 20, 30, 40, 50 ]
50
4
[ 10, 20, 30, 40, 50 ]
[ 1, 1, 1, 1, 1 ]
*/

const resultadoDos = numeros.map(item =>{
    return item * 2;
});
console.log(resultadoDos);
/*Resultado de: console.log(resultadoDos);
[ 20, 40, 60, 80, 100 ]
*/

//---------------------------*******************
const objetos = [
    {nombre:'A', apellido: 'B'},
    {nombre:'C', apellido: 'D'},
    {nombre:'E', apellido: 'F'},
    {nombre:'G', apellido: 'H'}
];

const resultadoNyA = objetos.map(item =>{
    return {
        ...item, //esto quiere decir que se agregara todas las propiedades del objeto
        nombreApellido: item.nombre + ' '+ item.apellido
    }
});

console.log(resultadoNyA);
/* Resultado de: console.log(resultadoNyA); 
[
  { nombre: 'A', apellido: 'B', nombreApellido: 'A B' },
  { nombre: 'C', apellido: 'D', nombreApellido: 'C D' },
  { nombre: 'E', apellido: 'F', nombreApellido: 'E F' },
  { nombre: 'G', apellido: 'H', nombreApellido: 'G H' }
]
*/
