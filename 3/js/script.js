//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//creo array coi nomi degli invitati
var lista = ["Aldo", "Giovanni", "Giacomo"];
var nomeInput = prompt("Inserisci nome");
var messaggio = false;
//do il for per una volta sola al check del nome

for (var i = 0; i < lista.length; i++){
  if (nomeInput == lista[i]){
    messaggio = true;
  }
}
if (messaggio){
  console.log("sei stato invitato");
} else {
  console.log("no, mi dispiace");
}
