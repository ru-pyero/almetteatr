$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollup').fadeIn(200);
    } else {
      $('.scrollup').fadeOut(200);
    }
  });
  
  $('.scrollup').click(function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 300);
  })
});