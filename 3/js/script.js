//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//creo array coi nomi degli invitati
var lista = ["Aldo", "Giovanni", "Giacomo"];
var nomeInput = prompt("Inserisci nome");
//variabile sentinella
var messaggio = false;

//diamo il for per ottenre una sola il check del nome
for (var i = 0; i < lista.length; i++){
  //se il nome corrusponte ad un nome della lista = true
  if (nomeInput == lista[i]){
    messaggio = true;
  }
//messaggio 
}
if (messaggio){
  console.log("sei stato invitato");
} else {
  console.log("no, mi dispiace");
}
