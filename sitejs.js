let toggle = false; 
let navToggle = document.getElementById('js-mobile-nav');
let header = document.getElementById('top');
let mobileLinks = document.getElementById('js-mobile-links');
let dropImgTop = document.getElementById('js-img-top');
let currentWindow = window.location

document
.querySelector('.button')
.addEventListener("click", function() {
    buttonClick(navToggle.display);
})

window.setTimeout(dropImg(), 5000);

function dropImg() {
    dropImgTop.style.height = ('275px');
}


function buttonClick() {
    if (toggle != true) {
        foo();
        toggle = true;        
    } 
    else  {
        bar();
        toggle = false;
    }    
}

function foo () {
    navToggle.classList.add('mobile-nav-active');
    navToggle.style.height = ('225px');

}
function bar() {
    navToggle.style.height = ('0px');
}
