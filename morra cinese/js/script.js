//Realizziamo il gioco della morra cinese
// Vince chi totalizza per primo 4 punti.
alert("Giocherai a morra cinese contro il computer, il primo che totalizzerà 4 partite tra te e il PC sarà il vincitore!");
var sceltaUtente = prompt("Scegli : Sasso, Carta o Forbici?");
toUp = sceltaUtente.charAt(0).toUpperCase();
toLow = sceltaUtente.substring(1).toLowerCase();
sceltaUtente = toUp + toLow;
var sceltaPc = generaNumero(1,3);

if (sceltaPc == 1){
  sceltaPc = "Carta";
} else if (sceltaPc == 2){
  sceltaPc = "Sasso";
} else {
  sceltaPc = "Forbici";
}
console.log(sceltaUtente)
console.log(sceltaPc)

if (sceltaUtente == sceltaPc){
  alert("Lancio patto!")
} else if ((sceltaUtente == "Sasso" && sceltaPc == "Forbici") || (sceltaUtente == "Forbici" && sceltaPc == "Carta") || (sceltaUtente == "Carta" && sceltaPc == "Sasso")) {
  alert("Hai vinto!")
} else {
  alert("Ha vinto il Computer!")
}

//Funzione genera numero casuale compreso tra un max e un min
function generaNumero(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//sconfitta
// ((sceltaUtente == "Forbici" && sceltaPc == "Sasso") || (sceltaUtente == "Carta" && sceltaPc == "Forbici") || (sceltaUtente == "Sasso" && sceltaPc == "Carta"))
