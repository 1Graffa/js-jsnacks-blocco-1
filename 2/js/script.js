//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
// alert();
// creo array vuoto + variabile numero
var lista = [];
var numero;
var resto = numero / 2;
// creo la regola 6 numeri + l'inserisci numero con prompt

for (var i=0; i<6; i++){
numero = prompt("Inserisci numero");
// se resto diverso da 0 allora metti numero in array
if (resto != 0){
  lista.push(numero);
  }
}

 console.log(lista);
