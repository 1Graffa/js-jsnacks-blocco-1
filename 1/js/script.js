//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while
var numeriInseriti;
var somma = 0;
//FOR
// for (var i = 0; i < 5; i++){
// numeriInseriti = parseInt(prompt('Inserisci un numero'));
// somma = somma + numeriInseriti;
// }
// console.log(somma);

//WHILE

var i= 0;
while (i <5){
  var numeroInserito = parseInt(prompt("inserisci numero"));
  somma += numeroInserito;
  i++;
}
console.log(somma);
