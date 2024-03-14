//alert('funziona?');


// SNACK 4
/*
    scrivere uns funzione per verificare se un numero e pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari
    o dispari
 */

    let userNumber = parseInt(prompt('type a number'));

    let result = oddOrEven(userNumber);
    console.log(result);


    function oddOrEven(number) {
        if (number % 2 === 0) {
            return 'even';
        }else{
            return 'odd';
        }
    }
