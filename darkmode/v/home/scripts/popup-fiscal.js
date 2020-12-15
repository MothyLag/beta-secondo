
var fiscalPop = document.getElementById('fiscal-pop'),
overlayFiscal = document.getElementById('overlay-fiscal'),
popupFiscal = document.getElementById('popup-fiscal'),
closeFiscal = document.getElementById('close-fiscal');

fiscalPop.addEventListener('click', function(){
overlayFiscal.classList.add('active');
popupFiscal.classList.add('active');
});

closeFiscal.addEventListener('click', function(e){
e.preventDefault();
overlayFiscal.classList.remove('active');
popupFiscal.classList.remove('active');
});