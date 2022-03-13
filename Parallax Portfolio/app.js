let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');
let waterWheel = document.getElementById('Water-Wheel');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.top = 40 + value * -0.2 + '%';
    bird1.style.top = value * -1.5 + 'px'; 
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.maginTop = value * 1.5 + 'px';
    rocks.style.top = 800 - value * 0.5 + 'px';
    water.style.top = 650 - value * 0.12 + 'px';
   
    header.style.top = value * 0.5 + 'px';
   
    
})



var looper;
let imagen = document.getElementById('Water-Wheel');
var degrees = 0;
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
	
}

window.addEventListener('scroll', rotateAnimation('Water-Wheel',55));


/* Slider Code */

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


/*End of Slider */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


/*

document.querySelector(".WaterWheel").addEventListener('scroll', function(){
	current_rotation += 260;
document.querySelector(".WaterWheel").style.transform = 'rotate(' + current_rotation + 'deg)';
});

*/

/*
window.addEventListener('scroll', function(){
    waterWheel.style.transform = "rotate(90deg)";
})
*/