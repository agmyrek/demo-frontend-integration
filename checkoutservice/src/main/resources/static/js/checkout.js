
class CheckoutData{

    setZahlungsart(zahlungsart){
        this.zahlungsart = zahlungsart;
    }

    toJSON() {
        return {
          zahlungsart: this.zahlungsart
        };
      }
}

let checkoutData;

window.onload = function () {

    checkoutData = new CheckoutData()
    includeZahlungsartenauswahl();
    addZahlungsartAusgewaehltEventHandler();
    addKaufenEventHandler();
};

function includeZahlungsartenauswahl(){
    $( "#zahlungsarten-checkout-content" ).load( "http://localhost:8081/zahlungsarten" );
}

function addZahlungsartAusgewaehltEventHandler(){

    window.addEventListener('zahlungsart-ausgewaehlt', function (event) {

        checkoutData.setZahlungsart(event.detail.zahlungsart);
        console.log("Event: zahlungsart-ausgewaehlt event im Checkoutservice erhalten: "+checkoutData.toJSON());

    }, false);
}

function addKaufenEventHandler(){

    document.getElementById("kaufen-button").addEventListener("click", function(event){

        console.log("Kaufen: "+JSON.stringify(checkoutData));
    });

}