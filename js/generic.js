// Smooth Scrolling - per ID
$(document).on('click', 'a[href^="#timeline"]', (event) => {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).on('click', 'a[href^="#top"]', (event) => {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(document).on('click', 'a[href^="#projects"]', (event) => {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// Remove scroll when projects open
$(document).on('click', '.resource__icon-stack', (event) => {
    $('html, body').addClass('overflow');
});

// add scroll when projects close
$(document).on('click', '.popup__close', (event) => {
    $('html, body').removeClass('overflow');
});

// load page on top
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}