let toggle = false; 
let navToggle = document.getElementById('js-mobile-nav');
let header = document.getElementById('top');
let mobileLinks = document.getElementById('js-mobile-links');


document
.querySelector('.button')
.addEventListener("click", function() {
    buttonClick(navToggle.display);
})

function buttonClick() {
    navToggle.scrollIntoView();
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
    //navToggle.style.display = 'flex';
    header.style.marginBlockStart = '9.2%';
    navToggle.classList.add('mobile-nav-active')
    navToggle.style.height = ('185px')
}

function bar() {
    //navToggle.style.display = 'none';
    navToggle.style.height = ('0px');
    header.style.marginBlockStart = '9.2%';
}
