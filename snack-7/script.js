// Crea 10 oggetti che rappresentano una zucchina, indicandone 
// per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine


const zucchinaRomana = {
    nome: 'Zucchina Romana',
    peso: 400,
    lunghezza: 8,
}

const zucchinaFiorentina = {
    nome:'Zucchina Fiorentina',
    peso: 540,
    lunghezza: 12,
}

const zucchinaTonda = {
    nome: 'Zucchina Tonda',
    peso: 350,
    lunghezza: 6,
}

const zucchinaNapoletana = {
    nome: 'Zucchina Napoletana',
    peso: 450,
    lunghezza: 10, 
}

const zucchinaGialla = {
    nome: 'Zucchina Gialla',
    peso: 500,
    lunghezza: 12,
    
}

const zucchinaNera = {
    nome: 'Zucchina Nera',
    peso: 300,
    lunghezza: 11,
    
}

const zucchinaVerde = {
    nome: 'Zucchina Verde',
    peso: 400,
    lunghezza: 10,
    
}


const zucchinaCrookneck= {
    nome: 'Zucchina Crookneck:',
    peso: 300,
    lunghezza: 11,  
}


const zucchinaX= {
    nome: 'Zucchina X:',
    peso: 500,
    lunghezza: 14,  
}

const zucchinaY= {
    nome: 'Zucchina Y:',
    peso: 200,
    lunghezza: 6,  
}

const pesoZucchine = (zucchinaY.peso + zucchinaX.peso + zucchinaCrookneck.peso + zucchinaVerde.peso + zucchinaNera.peso + zucchinaGialla.peso + zucchinaNapoletana.peso + zucchinaTonda.peso + zucchinaFiorentina.peso + zucchinaRomana.peso);

console.log(pesoZucchine);