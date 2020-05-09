var Karambits = 0;
var audio = document.getElementsById('audio')
function add(){
  Karambits = Karambits + 1;
  document.getElementsBYId('Karambits').innerHTML = "Karambits: " + Karambits;
  audio.play();
}
