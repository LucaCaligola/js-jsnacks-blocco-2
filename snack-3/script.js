// Dare la possibilità di inserire due parole. Verificare tramite una funzione che 
// le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, 
// stamparle entrambe altrimenti stampare la più lunga delle due.

const primaParola = prompt('inserisci una parola');
const secondaParola = prompt("inserisci un'altra parola");


function lunghezza (wordOne, wordTwo){
    
    if (primaParola.length === secondaParola.lenght) {
        return console.log(true);
    }

    else if (primaParola.length < secondaParola.lenght)
    {
      return comsole.log(secondaParola);
    }

    else {
      return console.log (primaParola);
    }

    

    
}

