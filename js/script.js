//INFORMAZIONI UTENTE
//Chiedo il nome all'utente
const name = prompt("Quale è il tuo nome?");
//Chiedo il cognome all'utente
const lastName = prompt("Quale è il tuo cognome?");
//Chiedo il colore preferito all'utente
const color = prompt("quale è il tuo colore preferito?");
//Dichiaro il mio suggerimento password
const passHint = (23);
//OUTPUT
//Ottengo la mia passwprd
const password = (`${name}${lastName}${color}${passHint}`);
//Controllo la mia passwordo 
console.log(password);
//Mostro la password saullo schermo
document.getElementById('passGenerator').innerHTML = password;