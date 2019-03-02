
class ZahlungsartEventData{

    constructor(zahlungsart){
        this.zahlungsart = zahlungsart;
    }

    toJSON() {
        return {
          zahlungsart: this.zahlungsart
        };
      }
}
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
    let zahlungsartEventData = new ZahlungsartEventData(zahlungsart);

    var event = new CustomEvent('zahlungsart-ausgewaehlt', {detail: zahlungsartEventData.toJSON()});
    // event auf dem window object veröffentlichen
    window.dispatchEvent(event);
}