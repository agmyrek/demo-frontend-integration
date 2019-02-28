


window.onload = function () {

    includeZahlungsartenauswahl();
    registerEventhandler();
};

function includeZahlungsartenauswahl(){
    $( "#zahlungsarten-checkout-content" ).load( "http://localhost:8081/zahlungsarten" );
}

function registerEventhandler(){

    window.addEventListener('zahlungsart-ausgewaehlt', function (event) {
        console.log("Event: zahlungsart-ausgewaehlt event im Checkoutservice erhalten: "+event.detail);
    }, false);
}