
var checkoutData = {
        artikelId : '',
        zahlungsart : ''
};

window.onload = function () {

    includeZahlungsartenauswahl();
    addZahlungsartAusgewaehltEventHandler();
    addKaufenEventHandler();
};

function includeZahlungsartenauswahl(){
    $( "#zahlungsarten-checkout-content" ).load( "http://localhost:8081/zahlungsarten" );
}

function addZahlungsartAusgewaehltEventHandler(){

    window.addEventListener('zahlungsart-ausgewaehlt', function (event) {
        console.log("Event: zahlungsart-ausgewaehlt event im Checkoutservice erhalten: "+event.detail);
        checkoutData.zahlungsart = event.detail;

    }, false);
}

function addKaufenEventHandler(){

    document.getElementById("kaufen-button").addEventListener("click", function(event){

        console.log("Kaufen: "+JSON.stringify(checkoutData));
    });

}