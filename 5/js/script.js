//L’utente inserisce due parole in successione, con due prompt.

//Il software stampa prima la parola più corta, poi la parola più lunga.

//inserisco le mie 2 varibili direttamente con prompt e il valore numeroMaggiore
var parolaUno = prompt("inserisci una parola");
var parolaDue = prompt("inseriscine un'altra");
var parolaPiuLunga;
var pari = "Le parole hanno pari lunghezza";

if (parolaUno.length > parolaDue.length) {
  parolaPiuLunga = parolaUno;
} else if (parolaDue.length > parolaUno.length) {
  parolaPiuLunga = parolaDue;
} else {
  parolaPiuLunga = pari ;
}
console.log(parolaPiuLunga);
