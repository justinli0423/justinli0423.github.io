// invisible nav bar when scrolling
var scrolling = false;
window.onscroll = ((e) => {
    scrolling = true;
});


setInterval(() => {
    if (scrolling) {
        hideNav();
        scrolling = false;
    } else {
        showNav();
    }
}, 200);

var hideNav = (() => {
    $('.navigation-top').removeClass('close');
    $('.navigation-top').addClass('open');
});

var showNav = (() => {
    $('.navigation-top').removeClass('open');
    $('.navigation-top').addClass('close');
});

// Time display
// setInterval(() => {
//     var date = new Date();
//     var time = date.toLocaleTimeString() + "." + date.getMilliseconds();
//     document.getElementById('time').innerHTML = time;
// }, 66);