//INFORMAZIONI UTENTE
//Chiedo il nome all'utente
const name = prompt("Quale è il tuo nome?");
//Chiedo il cognome all'utente
const lastName = prompt("Quale è il tuo cognome?");
//Chiedo il colore preferito all'utente
const color = prompt("quale è il tuo colore preferito?");
//Chiedo un numero all'utente
const number =prompt("Dimmi un numero");
//Trasformo la stringa in un numero
const numberParse = parseInt(number)
//OUTPUT
//Ottengo il mio numero modificato
const numberSum =(numberParse + 23)
//Ottengo la mia password
const password = (`${name}${lastName}${color}${numberSum}`);
//Controllo la mia password
console.log(password);
//Mostro la password saullo schermo
document.getElementById('passGenerator').innerHTML = password;