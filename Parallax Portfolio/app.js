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



/* Start of Validation Contact Page */
document.getElementById("myform").addEventListener("submit", validateForm);



function validateUsername()
{
  var username = document.getElementById("Username").value;

  if(!username || username=="null" || username=="" || username.length > 12)
    {
        showError("Username","Username is required and cannot be greater than 12 characters");
       return false;
    }
    return true;
}



function validateEmail()
{
  var userEmail = document.getElementById("Email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  
  if(!userEmail || atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length)
    {
       showError("Email","Invalid email");
       return false;
    }
    return true;
}

var numbers=/^[0-9]+$/;
function validatePhone()
{
  var phone = document.getElementById("Phone").value;
  
  if(phone.length > 15 || phone.length < 10 ||phone === 'null' || phone==="" || !phone.match(numbers))
    {
       showError("Phone","Invalid phone number");       
       return false;
    }
    return true;
}









function validatePassword()
{
  var password = document.getElementById("Password").value;

  if(!password || password=="null" || password=="" || password.length > 7)
    {
        showError("Password","Password is required and cannot be greater than 7 characters");
       return false;
    }
    return true;
}







function showError(element_id, message)
{
  var element = document.getElementById(element_id);
  var error_div = document.createElement('div');
  error_div.id = element_id+'_error';
  error_div.className='error';
  error_div.innerHTML = message;
  element.parentNode.insertBefore(error_div, element.nextSibling);
  
}

function removeElementsByClass(rootElement,className)
{
    var elements = rootElement.getElementsByClassName(className);
    while(elements.length > 0)
    {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeErrorMessages()
{
  removeElementsByClass(document.getElementById('myform'), 'error');
}


function validateForm(event)
{
    removeErrorMessages();
    if (validateUsername() &&
        validateEmail() &&
        validatePhone()
        ) 
    {
        return true;
    } 
    else 
    {
        event.preventDefault();
        return false;
    }
}


/* shsdfsdjl*/

document.getElementById("resume").onclick = function() {
  location.href = "https://heblex12.github.io/Hebler/Parallax%20Portfolio/pages/Artifacts/artifact01.html";
}