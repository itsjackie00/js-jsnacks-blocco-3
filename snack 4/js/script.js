//alert('funziona?');


// SNACK 3
/*
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
 */

let userNumber = parseInt(prompt('Inserisci un numero'));
console.log(userNumber);

for (let index = 0; index < userNumber; index++) {
    console.log(randmNumbsArray());
    
}

function randmNumbsArray() {
    let newArray = [];
    for (let index = 0; index < 10; index++) {
        newArray.push(getRndInteger(1,100));
    }
    return newArray
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }