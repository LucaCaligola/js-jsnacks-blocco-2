// Chiedo all'utente un numero e genero attraverso una funzione un numero 
// di quadrati equivalente 
// al numero inserito dall'utente nel DOM, in qualsiasi forma. 


const userNumber = parseInt(prompt("scegli un numero"));
const wrapper = document.querySelector('div.wrapper');
console.log (userNumber);


for (let i = 0; i < userNumber; i++) {
   

    wrapper.appendChild(getSquare())
}











function getSquare () {
    const newSquareElement = document.createElement('div')
    newSquareElement.classList.add('square');
    return newSquareElement;
}