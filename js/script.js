const chilometri = parseInt(prompt('Inserisci il numero di chilometri da percorrere'));
const eta = parseInt(prompt('Inserisci l\'età del passeggero:'));
let prezzoTotale = chilometri * 0.21;
if (eta < 18) {
    prezzoTotale *= 0.8;
} else if (eta >= 65) {
    prezzoTotale *= 0.6;
}

prezzoTotale = prezzoTotale.toFixed(2);

const message = 'Il prezzo del biglietto è di €' + prezzoTotale;

console.log(message);

document.getElementById('output').innerHTML = message;