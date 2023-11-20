// Crea una funzione che accetta due elementi del dom, uno e' il parent e l'altro e' 
// un elemento che voglio sia aggiunto al parent come figlio.

const wrapper = document.querySelector ('div.wrapper')
const cardElement = document.createElement ('p');



function element (padre, figlio) {
    
    wrapper.appendChild (cardElement)
  
}