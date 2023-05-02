/* //CREACION DE CLASE POR Función constructora 
function Auto(puertas, color, marca, año, ruedas){
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    //creacion de un metodo
    this.informacion = function(){
        console.log('Este es un '+this.marca + ' de color '+ this.color);
    }
}

//Inicializar la clase
var miPrimerAuto =  new Auto(2,'rojo','Ferrari',2018,4);
miPrimerAuto.informacion(); // Imprime 'Este es un Ferrari de color rojo' */

//************OTRA MANERA  */
/* //CREACION POR Expresion de Clase

class Auto{
    constructor(puertas, color, marca, año, ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    informacion(){
        console.log('Este es un '+this.marca + ' de color '+ this.color);
    }
}

var miSegundoAuto = new Auto(4,'Blanco','Fiat',2015,4);
miSegundoAuto.informacion(); //Imprime Este es un Fiat de color Blanco
// console.log(miSegundoAuto);
// console.log(miSegundoAuto.marca); */

//************OTRO EJEMPLO************************  */
class Football{
    constructor(jugador){
        this.jugador = jugador;
    }
    //creamos un metodo
    obtenerNombre(){
        console.log(this.jugador);
    }
}

var argentina = new Football('Messi');
var brasil = new Football('Pele');

argentina.obtenerNombre(); //Imprime 'Messi'
brasil.obtenerNombre(); //Imprime 'Pele'