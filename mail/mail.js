/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
*/

// MAIL
// Creazione lista e-mail di invitati
let listaInvitati = ["simone@bool.com", "giulia@bool.com", "angela@bool.com"];

// Chiedere e-mail all'utente
let emailUtente = prompt("Inserisci la tua email");
let benvenuto = false;

// Controllo se utente è nella lista
for (let i = 0; i < listaInvitati.length; i++) {
    
if (listaInvitati[i] === emailUtente) {
benvenuto = true; }
}

// Stampare esito controllo
if (benvenuto) {
    console.log("Grazie per essere venuto");
} else {
    console.log("Non sei stato invitato")
}
