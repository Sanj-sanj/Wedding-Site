// //gallery js specific
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;
//set first images opactiy 
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

//make it so when they slide to next slide it resets the previous one to its default.
//this is swiper specific
function checkCurrentImg (activeImg) {
    activeImg = mySwiper.slides[mySwiper.activeIndex]
}

function imgClick(e) {
    const current = document.querySelector('.swiper-slide-active');

    checkCurrentImg(current);
    //reset opacity
    imgs.forEach(function (img) {
        img.style.opacity = 1
    });
    //change current img to src of clicked img
    current.src = e.target.src;
    current.classList.add('fade-in');
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //change the opacaity to opacity var
    e.target.style.opacity = opacity;
}

var mySwiper = new Swiper(".swiper-container", {
    speed: 1000,
    spaceBetween: 100,
    centeredSlides: true,
    navigation: {
        nextEL: ".swiper-button-prev",
        nextEL: ".swiper-button-next"
    }
});

