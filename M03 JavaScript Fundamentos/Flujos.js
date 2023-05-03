function viajar(destino){
    if(destino === 'Brasil'){
        console.log("Gire a la izquierda");
    } else if (destino === 'Argentina'){
        console.log("Gire a la derecha");
    } else {
        console.log('Nos perdimos');
    }
};

viajar('Brasil');
viajar('Peru');
viajar('Argentina');

function puedeManejar(edad){
    if(edad>=18){
        console.log(true);
    }console.log(false);
}
puedeManejar(17);

Math.pow(2,3);

console.log(Math.round(0.49));
console.log(Math.round(0.50));

console.log(Math.floor(5.23));
console.log(Math.floor(5.99));

console.log(Math.ceil(5.13));
console.log(Math.ceil(5.85));

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

console.log(Math.random());

