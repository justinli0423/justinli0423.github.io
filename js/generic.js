// Entrance effect
setTimeout(() => {
    $('.loading__animation').addClass('clicker');
    $('.clicker').text("Click here!");
}, 4000);

$(document).on('click', '.clicker', () => {
    $('.loading__animation').addClass('hidden');
    $('.loading').addClass('hidden');
    $('.overflow').removeClass('overflow');
});

// Smooth Scrolling - per ID
$(document).on('click', 'a[href^="#timeline"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).on('click', 'a[href^="#top"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).on('click', 'a[href^="#projects"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// load page on top
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

// particle js
particlesJS.load('particles-js', 'json/particles.json');