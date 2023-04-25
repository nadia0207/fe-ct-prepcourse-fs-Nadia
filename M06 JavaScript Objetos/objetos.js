/* var deporte = {
    conBalon: ['Football','Basketball','Rugby'], 
    sinBalon:['Boxeo','Surf','Trekking'],
}; */
 //----------------------------------***************
/* var persona ={ nombre: 'Lucas',edad: 26, estudios: {esProgramador:true}}; 
console.log(persona.edad); //imprime 26
persona.nombre = 'Martin';
console.log(persona.nombre); //Imprime Martin
persona.edad = 32;
console.log(persona.edad); //Imprime 32 */
//----------------------------------***************

/* var autos ={};
autos.marcas= ['Ford','Audi' , 'Ferrari'];
console.log(autos); //Imprime { marcas: [ 'Ford', 'Audi', 'Ferrari' ] }
delete autos.marcas; // Se elimina la propiedad marcas
console.log(autos); //Imprime {} */

//----------------------------------***************
/* var misFunciones = {
    saludar: function(){
        console.log('Hola')
    },
};

misFunciones.saludar(); //Imprime Hola */

//----------------------------------***************
/* var atuendos = {manos: ['Guantes','Anillos'], pies: ['Zapatos, Soquetes']};
//Usaremos Dot-Notation o notación por puntos 
console.log(atuendos.manos); //Imprime [ 'Guantes', 'Anillos' ] 

//Creamos la propiedad Piernas y Usaremos Bracket-Notation, o notación por corchetes
atuendos['piernas'] = ['Bermudas','Pantalones'];
console.log(atuendos);
//Imprime 
/* {
  manos: [ 'Guantes', 'Anillos' ],
  pies: [ 'Zapatos, Soquetes' ],
  piernas: [ 'Bermudas', 'Pantalones' ]
} */

//----------------------------------***************
var comidas = {};
var diferenciadeNotaciones = function (propUno,propDos){
    comidas[propUno] = ['Fruta', 'Vegetales'];
    comidas[propDos] = ['Hamburguesas','Papas fritas'];
};

diferenciadeNotaciones('Saludable','NoSaludable');
console.log(comidas);
//Imprime
// {
//   Saludable: [ 'Fruta', 'Vegetales' ],
//   NoSaludable: [ 'Hamburguesas', 'Papas fritas' ]
// }
