// Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo,
//  allora ritorna vero, altrimenti ritorna falso. Micro bonus: se sono uguali ritorna 
//  il numero.

const firstNumber = prompt('inserisci un numero');
const secondNumber = prompt("inserisci un altro numero");

if (divisione (firstNumber, secondNumber)) {
    console.log(true)
}




function divisione (numeroUno, numeroDue) {
    if (numeroUno < numeroDue){
        return true
    }

    else if (numeroUno > numeroDue){
        return false
    }
    else {
        return numeroUno
    }
}
