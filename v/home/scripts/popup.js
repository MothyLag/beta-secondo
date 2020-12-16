function openCredit(id, monto, interes, plazo, inicioPago) {
  
  jQuery(document).ready(function($) {
  	$("#montoModal").html("$"+monto+" MXN");
  	$("#interesModal").html("Interés: %"+interes);
  	$("#semanasModal").html("Plazo a pagar: "+plazo);
  	$("#inicioModal").html("Inicio de pago: "+inicioPago+" semanas");
  	var dinero = ((monto*2/2)+(monto*(interes/100)))/plazo;
  	$("#montoSemanalModal").html("$"+dinero.toFixed(2)+" MXN");
  	var addeded = 
  	'<a class="cta-button-blue-overlay cta-global-larger-vis" id="solicitarCreditoPc" onclick="openAlarg(\''+id+"'"+')\">Solicitar</a>'+
  	'<a class="cta-button-blue-overlay cta-global-mobile-vis"  id="solicitarCreditoPc" onclick="openAlarg(\''+id+"'"+')\">Solicitar</a>';
  	''

  	$("#buttonSolicitar").html(addeded);

  });
  document.getElementById("viewCredit").style.width = "100%";
  document.getElementById("sideAdq").style.width = "250px";
  document.getElementById("sideAdq").style.opacity = "1";


}

function closeCredit() {
  document.getElementById("viewCredit").style.width = "0";
  document.getElementById("sideAdq").style.width = "0";
  document.getElementById("sideAdq").style.opacity = "0";
}


function solicitateCredit(id){

}