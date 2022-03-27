document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-productos', { delay: 500});
ScrollReveal().reveal('.productos-banner-one', { delay: 500});
ScrollReveal().reveal('.productos-banner-two', { delay: 500});



