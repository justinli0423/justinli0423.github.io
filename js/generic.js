// Header timeout
setTimeout(() => {
    $('.loading__animation').addClass('hidden');
}, 2000);
setTimeout(() => {
    $('.overflow').removeClass('overflow');
    $('.loading').addClass('hidden');
}, 3000);

// Smooth Scrolling - per ID
$(document).on('click', 'a[href^="#timeline"]', (event) => {
    event.preventDefault(); 

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).on('click', 'a[href^="#top"]', (event) =>  {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).on('click', 'a[href^="#projects"]', (event) =>  {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// particle js
particlesJS.load('particles-js', 'json/particles.json', () => {
    console.log('callback - particles.js config loaded');
});

// load page on top
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}
