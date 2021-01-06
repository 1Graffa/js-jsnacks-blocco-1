//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

var numeri = [1,2,3,4,5,6,7,8,9,10];
var somma = 0;

//CON FOR
// for (var i = 0; i < numeri.length; i++){
//   if (i%2 != 0){
//     somma = somma + numeri[i];
//     }
// }

//CON WHILE
var i = 0;
while (i < numeri.length){ //finchè la posizione di i è minore della lunghezza dell array
  if (i%2 != 0){
  somma = somma + numeri[i];
  }
  i++; //sennò creo ciclo infinito
}
console.log(numeri.length);
console.log(somma);
