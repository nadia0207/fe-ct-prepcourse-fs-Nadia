
function mayorYMenorYpar(num){
    if (num > 5 && num < 10 && num % 2 ===0){
        console.log(true);
     } else  console.log(false);     
    
};

//mayorYMenorYpar(5); //Resultado False
//mayorYMenorYpar(8); //Resultado True

function OperadorOr(str){
    if(str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
};

//OperadorOr('Henry'); //Resultado true
//OperadorOr('Javascrip'); //Resultado False
//OperadorOr('H'); //Resultado true

function Negacion(permiso){
    if(!permiso) console.log("No tiene permiso"); //permiso es una varible boleana, si No es true imprime "No tiene permiso"
}

Negacion(true); // Sin Resultado, esta linea No imprime nada
Negacion(false); // Resultado: "No tiene permiso"