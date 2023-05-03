/* var deuvelveUsuario = function() {    return 'Camilo';};

var devuelvoSaludo = function (){
    return 'Hola';
};

var saludar = function (cb1 , cb2){
    return cb1() + ' ' + cb2();
};

var resultado = saludar(devuelvoSaludo, deuvelveUsuario);
console.log(resultado); //IMPRIME 'Hola Camilo' */

//************************************ */
var devuelvoFrase = function(comida){
    return 'Hoy quiero comer: ' + comida;
};

var hablar = function(plato, cb){ 
    return cb(plato);
};

var fraseFinal = hablar('Pizza', devuelvoFrase);
console.log(fraseFinal);
