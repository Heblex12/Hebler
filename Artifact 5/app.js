var Index = 1;
showRel(Index);

function plusDivs(n) {
  showRel(Index += n);
}

function showRel(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("myDescs");
  if (n > x.length) {Index = 1};
  if (n < 1) {Index = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  x[Index-1].style.display = "block";
  y[Index-1].style.display = "block";
}

function showAutoSlide() {
	plusDivs(+1);
	setTimeout(showAutoSlide, 2000);
}




/*
var counter = 1;

setInterval( function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    
    if(counter > 5){
        counter = 1;
    }
},
5000);

*/