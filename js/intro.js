// ---------------------Entrance effect
// entrance click after 4s
setTimeout(() => {
    $('.loading__animation').addClass('clicker');
    $('.clicker').text("Click me!");
}, 4000);


// zoom in and loading animation
$(document).on('click', '.clicker', () => {
    // change opacity + scaling
    $('.loading__animation').addClass('hidden');
    $('.loading').addClass('scale');
    setTimeout(() => {
        // show all markups inside main page
        $('.hidden-display').removeClass('hidden-display');
    }, 200);
    setTimeout(() => {
        $('.loading').addClass('hidden');
        $('.overflow').removeClass('overflow');
    }, 500);
    // completely remove display after opacity is 0
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
    // load on top
    window.scrollTo(0, 0);
});