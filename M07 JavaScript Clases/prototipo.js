/* //QUEREMOS ingresar al prototypo de esa propiedad
Array.prototype.mayoresQueTres = function(){
    var arregloModificado = [];

    //This HACE referencia al Array que esta invocando el metodo
    for(let i = 0; i < this.length; i++){
        if(this[i] > 3){
           arregloModificado.push(false); 
        }else {
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
};

//el metodo ya fue agregado al constructor del objeto global array
var arreglo = [1,2,3,4,5];
var nuevoArreglo = arreglo.mayoresQueTres();
console.log(nuevoArreglo); //IMPRIME [ 1, 2, 3, false, false ]
 */

//************* otro ejemplpo */

class LatinoAmerica {
    constructor(){
        this.paises = [];
    }

    //mediante el prototype de esta clase crearemos un metodo que  nos permita agregar el 
    //nombre de un pais
}

LatinoAmerica.prototype.agregarPais =  function (pais){
    this.paises.push(pais);
};

var continente = new LatinoAmerica();
continente.agregarPais('Mexico');
console.log(continente.paises); //IMPRIME [ 'Mexico' ]