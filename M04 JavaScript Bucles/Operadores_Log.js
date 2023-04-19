function condicionComplea(num){
    if(num > 9 && num % 2===0 || num ===3) console.log(true);
    else console.log(false);
};

condicionComplea(10);
condicionComplea(6);
condicionComplea(3);
condicionComplea(5);