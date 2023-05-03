/* var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
//Buscar la propiedad 'nombre' en el objeto libro
var tienePropiedad= libro.hasOwnProperty('nombre');
console.log(tienePropiedad); // Imprime False
 */

//--------------------------*********************
/* var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades); // Imprime [ 'autor', 'genero', 'año' ]
 */
//--------------------------*********************

/* var mundo = {continentes: 7, paises:195, oceanos: 5};
for(var prop in mundo){
    console.log('Esta es la propiedad: ' + prop)
    console.log('Este es el valor:' + mundo[prop]);
}
//Imprime
// Esta es la propiedad: continentes
// Este es el valor:7
// Esta es la propiedad: paises
// Este es el valor:195
// Esta es la propiedad: oceanos
// Este es el valor:5 */

//--------------------------*********************
var mascota = {
    animal: 'Perro', 
    raza: 'Ovejero Aleman', 
    amistoso: true, 
    duena: 'Maria Lopez', 
    info: function(){
        console.log('Mi perro es un '+ this.raza); 
    },
};
mascota.info(); //Imprime Mi perro es un Ovejero Aleman