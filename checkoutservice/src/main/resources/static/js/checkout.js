
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
    //Aufruf der Ressource zahlungsarten. Die Antwort wird in das HTML eingesetzt.
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
        kaufen(JSON.stringify(checkoutData));
    });
}

function kaufen(jsonPayload){
    fetch('http://localhost:8080/kaufen', {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: jsonPayload
    })
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then(function(jsonData) {
        document.getElementById("kaufabschluss-zahlungsart").innerHTML = jsonData.zahlungsart;
        document.getElementById("kaufabschluss-bestätigung").style.visibility = 'visible';

    }).catch(function(error) {
        console.log(error);
    });
}