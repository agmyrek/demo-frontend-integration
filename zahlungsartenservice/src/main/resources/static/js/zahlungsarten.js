
document.getElementById("link-auswahl-vorkasse").addEventListener("click", function(event){
    zahlungsartAuswaehlen(event);
});

document.getElementById("link-auswahl-rechnung").addEventListener("click", function(event){
    zahlungsartAuswaehlen(event);
});

document.getElementById("link-auswahl-bankeinzug").addEventListener("click", function(event){
    zahlungsartAuswaehlen(event);
});


function zahlungsartAuswaehlen(event){

    var targetElement = event.target || event.srcElement;
    var zahlungsart = targetElement.getAttribute("zahlungsart")
    console.log('gewählte Zahlungsart: '+zahlungsart);

    var event = new CustomEvent('zahlungsart-ausgewaehlt', {detail: zahlungsart});
    // event auf dem window object veröffentlichen
    window.dispatchEvent(event);
}