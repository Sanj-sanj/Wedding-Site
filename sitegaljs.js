//gallery js specific
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img')
const opacity = 0.4;
//set first images opactiy 
imgs[0].style.opacity = opacity;


imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //reset opacity 
    imgs.forEach(img => (img.style.opacity =1));
    //change current img to src of clicked img
    current.src = e.target.src;
    current.classList.add('fade-in');
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //change the opacaity to opacity var
    e.target.style.opacity = opacity;
}