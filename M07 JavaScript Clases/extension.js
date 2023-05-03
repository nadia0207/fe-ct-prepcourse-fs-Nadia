class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log('Hola , mi nombre es: '+ this.nombre + '. Tengo '+ this.edad);
    }
}

class Programador extends Persona{
    constructor(nombre, edad, añosDeExperiencia){
        //con Super Heredamos
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }

    codear(){
        console.log(
            'Soy '+ 
            this.nombre +
            '. Codeo desde hace '+
            this.añosDeExperiencia + 
            ' años.');
    }
}

var martin = new Persona('Martin',26)
var Programadores = new Programador('Maria', 37 , 4);
martin.saludar(); //IMPRIME 'Hola , mi nombre es: Martin. Tengo 26'
Programadores.codear(); //IMPRIME 'Soy Maria. Codeo desde hace 4 años.'
Programadores.saludar(); //IMPRIME 'Hola , mi nombre es: Maria. Tengo 37'

