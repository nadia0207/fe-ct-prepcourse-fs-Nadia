function condicionComplea(num){
    if(num > 9 && num % 2===0 || num ===3) console.log(true);
    else console.log(false);
};

condicionComplea(10); //Resultado: True
condicionComplea(6); //Resultado: false
condicionComplea(3); //Resultado: True
condicionComplea(5); //Resultado: false