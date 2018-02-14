// invisible nav bar when scrolling
var scrolling = false;
window.onscroll = ((e) => {
    scrolling = true;
});


setInterval(() => {
    if (scrolling) {
        hideNav();
        scrolling = false;
    }else{
        showNav();
    }
}, 200);

var hideNav = function () {
    $('.navigation-top').removeClass('close');
    $('.navigation-top').addClass('open');
};

var showNav = function () {
    $('.navigation-top').removeClass('open');
    $('.navigation-top').addClass('close');
};