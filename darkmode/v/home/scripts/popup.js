
var wacthCredit = document.getElementById('watch-credit'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
closeCredit = document.getElementById('close-credit');

wacthCredit.addEventListener('click', function(){
overlay.classList.add('active');
popup.classList.add('active');
});

closeCredit.addEventListener('click', function(e){
e.preventDefault();
overlay.classList.remove('active');
popup.classList.remove('active');
});