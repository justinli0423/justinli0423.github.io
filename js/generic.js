// Smooth Scrolling
$(document).on('click', 'a[href^="#timeline"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

// particle js
particlesJS.load('particles-js', 'json/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });