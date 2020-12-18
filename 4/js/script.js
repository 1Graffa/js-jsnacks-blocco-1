//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore

//inserisco le mie 2 varibili direttamente con prompt e il valore numeroMaggiore
var numeroUno = parseInt(prompt("inserisci un numero"));
var numeroDue = parseInt(prompt("inseriscine un altro"));
var numeroMaggiore;
var pari = ("i numeri sono pari");

if (numeroUno > numeroDue) {
  numeroMaggiore = numeroUno;
} else if (numeroDue > numeroUno) {
  numeroMaggiore = numeroDue;
} else {
  numeroMaggiore = pari ;
}

console.log(numeroMaggiore);
