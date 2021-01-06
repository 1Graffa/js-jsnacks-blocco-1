// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.

//Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.

//Bonus: provate 3 livelli di complessità
alert("Benvenuto! hai 4 tentativi per indovinare il numero pensato dal computer in un range da 1 a 100")
var numeroCasualePc = generaNumero(1,100);
var tentativo = parseInt(prompt("Prova a indovinare.."));
for (i = 3; i > 0; i--){
  if (tentativo == numeroCasualePc) {
    alert("complimenti hai indovinato")
    break;//ho messo break per evitare doppia finestra sull'alert "Complimenti hai indovinato"
  } else if (tentativo < numeroCasualePc) {
    alert("no, il numero da indovinare è più alto.. ritenta")
    tentativo = parseInt(prompt("Prova a indovinare.."))
  } else if (tentativo > numeroCasualePc) {
    alert("no, il numero da indovinare è più basso.. ritenta")
    tentativo = parseInt(prompt("Prova a indovinare.."))
    }
  }
  //Nel caso non venga indovinato il numero del PC viene dato un messaggio di congedo tramite alert
  if (tentativo != numeroCasualePc) {
    alert("No, peccato! Non hai indovinato e hai finito i tentativi!.. ritenta e magari sarai più fortunato!")
  }
console.log(numeroCasualePc);

//Funzione genera numero casuale compreso tra 1 e 100
function generaNumero(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
