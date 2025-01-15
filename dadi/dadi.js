/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Generazione numero random da 1 a 6
let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
let numeroPc = Math.floor(Math.random() * 6) + 1;

// Lancio del giocatore e del PC
console.log( numeroGiocatore, numeroPc )

// Stabilire il vincitore 
if( numeroGiocatore > numeroPc ){
    console.log( `Il giocatore ha vinto: ${numeroGiocatore} - ${numeroPc}` )
} else if(numeroGiocatore < numeroPc ){
    console.log( `Il pc ha vinto: ${numeroGiocatore} - ${numeroPc}` )
}else {
    console.log( `Il giocatore e il pc hanno pareggiato: ${numeroGiocatore} - ${numeroPc}` )
}