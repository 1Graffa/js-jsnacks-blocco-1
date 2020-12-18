//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//creo array coi nomi degli invitati
var lista["Aldo", "Giovanni", "Giacomo"];
var nomeInput;
//do il for per una volta sola al check del nome
for (var i = 0; i < 1; i++){
  var nomeInput = prompt("Inserisci nome");
  if lista.includes(nomeInput){
    document.getElementById('messagex').innerHTML= "Si, sei stato invitato";
    } else {
    document.getElementById('messagey').innerHTML= "no, mi dispiace";
    }
  }
