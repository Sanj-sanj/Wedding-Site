// //gallery js specific


let current = document.querySelector('.swiper-slide-active');

// if (mySwiper.activeIndex === 0) {
//     mySwiper.slides[0].src = current.src;
// } else if(mySwiper.activeIndex === 1) {
//     mySwiper.slides[1].src = current.src;
//     // current = mySwiper.activeIndex === 1;
// } else if(mySwiper.activeIndex === 2) {
//     mySwiper.slides[2].src = current.src;
//     // current = mySwiper.activeIndex === 3;
// }
// //try to make it so current which is currently [0] on the node list becomes the current active index of the mySlides var.

const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

//set first images opactiy 
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

//make it so when they slide to next slide it resets the previous one to its default.
//this is swiper specific
function check () {
    console.log('working')
    for(let i = 0; i < mySwiper.slides.length; i++) {

        if (mySwiper.activeIndex === 0) {
            current = mySwiper.slides[0];
        }
        else if (mySwiper.activeIndex === 1) {
            current = mySwiper.slides[1];
        }
        if (mySwiper.activeIndex === 2) {
            current = mySwiper.slides[2];
        }
    }
}
function imgClick(e) {
    check();
    //reset opacity
    imgs.forEach(img => (img.style.opacity =1));
    //change current img to src of clicked img
    current.src = e.target.src;
    current.classList.add('fade-in');
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //change the opacaity to opacity var
    e.target.style.opacity = opacity;
}



var mySwiper = new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    centeredSlides: true,
    navigation: {
        nextEL: ".swiper-button-prev",
        nextEL: ".swiper-button-next"
    }
});

