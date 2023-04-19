/* var suma=0;
suma= suma +1;
suma= suma +2;
suma= suma +3;
suma= suma +4; 
console.log(suma); // Resultado 10
 //-----------------------------------------------
 var suma=0;
for(var i=0; i<10; i++){
 suma=suma + i;
 console.log('Variablel de iteracion',i);
}
 console.log('Varible Suma:',suma)

 //-----------------------------------------------
 var suma=0;
 while (suma < 3){
    suma = suma +1;
    console.log(suma);
 }

//-----------------------------------------------
 
function PrecioFrutas(expre) {
    var mensaje = '';
switch (expre){
    case 'Naranjas': mensaje='el kilo de Naranjas cuesta $0.59';
    break;
    case 'Manzanas': mensaje='El kilo de Manzanas cuesta $0.32';
    break;
    case 'Mangos': mensaje='El kilo de Mangos cuesta $2.79';
    break;
    default: mensaje='Lo lamentamos por el momento no tenemos '+ expre + '.';
}
    return console.log(mensaje);
}

PrecioFrutas('Mangos'); // Respuesta: El kilo de Mangos cuesta $2.79
PrecioFrutas('Pera'); //Respuesta: Lo lamentamos por el momento no tenemos Pera.

//-----------------------------------------------
var Resultado = '';
var i=0;

do{
    i = i + 1;
    Resultado = Resultado + i;
} while (i < 5);

console.log(Resultado); // Resultado: '123456'
console.log(i); // Resultado: 5


//-----------------------------------------------
var i=0;
var n=0;
while (i<5){
    i++;
    if(i == 3)
    continue;
    n +=i;
}

console.log(i); // Resultado: 5
console.log(n); //Resultado:12
*/
//-----------------------------------------------

function comprobarBreak(x){
    var i=0;
    while (i<6){
        if(i == 3)
        break;
        i++;
    }
    return i;
}

console.log(comprobarBreak(6));