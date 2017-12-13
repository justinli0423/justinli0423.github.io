$(document).scroll(function () {
  var y = $(this).scrollTop();
  var x = $(this).width();
  if ((y > 70 && x > 900) || (y > 110 && x > 612)) {
    $('.navigation-toggle').fadeIn();
  } else {
    $('.navigation-toggle').fadeOut();
  }

});

$(document).ready(function () {
  $('.navigation-toggle').fadeOut();
});
