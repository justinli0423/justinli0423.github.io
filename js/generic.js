// Entrance effect

// entrance click after 4s
setTimeout(() => {
    $('.loading__animation').addClass('clicker');
    $('.clicker').text("Click me!");
}, 4000);


// zoom in and loading animation
$(document).on('click', '.clicker', () => {
    $('.loading__animation').addClass('hidden');
    $('.loading').addClass('scale');
    setTimeout(() => {
        $('.hidden-display').removeClass('hidden-display');
    }, 200);
    setTimeout(() => {
        $('.loading').addClass('hidden');
        $('.overflow').removeClass('overflow');
    }, 500);
    setTimeout(() => {
        $('.loading').css(
            'display', 'none'
        );

        $('.hidden').css(
            'display', 'none'
        );

        // particle js - must load after body becomes unhidden for canvas to have 
        // proper dimension
        particlesJS.load('particles-js', 'json/particles.json');

    }, 800);
    window.scrollTo(0, 0);
});

// Smooth Scrolling - per ID
$(document).on('click', 'a[href^="#timeline"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).on('click', 'a[href^="#top"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).on('click', 'a[href^="#projects"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// load page on top
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}