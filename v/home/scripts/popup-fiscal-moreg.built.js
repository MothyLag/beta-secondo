function openOvermoreg() {
    document.getElementById("fiscalMoreg").style.visibility = "visible";
    document.getElementById("mainFiscal2").style.height = "450px";
    document.getElementById("bottomOver2").style.height = "5rem";
}
            
function closeOvermo() {
    document.getElementById("fiscalMoreg").style.visibility = "hidden";
    document.getElementById("mainFiscal2").style.height = "0";
    document.getElementById("bottomOver2").style.height = "0";
}

function openMosig() {
    document.getElementById("fiscalMo").style.visibility = "visible";
    document.getElementById("mainOver").style.height = "450px";
    document.getElementById("bottomOver").style.height = "5rem";
    document.getElementById("fiscalMoreg").style.visibility = "hidden";
    document.getElementById("mainFiscal2").style.height = "0";
    document.getElementById("bottomOver2").style.height = "0";
}