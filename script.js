var Karambits = 0;
var audio = document.getElementsById('Click');
function add(){
  Karambits = Karambits + 1;
  document.getElementsById('Karambits').innerHTML = "Karambits: " + Karambits;
  audio.play();
}
