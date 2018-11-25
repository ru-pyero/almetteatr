$(document).ready(function () {
  if ($(".slider-box__owl-carousel").length > 0) {
    $(".slider-box__owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      items: 1,
      center: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>']
    });
  }

  window.onresize = function () {
    $('.slider-box__owl-carousel').height($('.slider-box__owl-carousel').width() / 2.5);
    $('.slider-box__owl-carousel .slider-item').height($('.slider-box__owl-carousel').height() + 'px');
    $('.slider-box__owl-carousel img').css('max-height', $('.slider-box__owl-carousel').height() + 'px');
  }
  
  $('.slider-box__owl-carousel').height($('.slider-box__owl-carousel').width() / 2.5);
  $('.slider-box__owl-carousel .slider-item').height($('.slider-box__owl-carousel').height() + 'px');
  $('.slider-box__owl-carousel img').css('max-height', $('.slider-box__owl-carousel').height() + 'px');

  $("img").each(function () {
    if (($(this).attr("src") == "") || ($(this).attr("src") == "/watermark.php?img=")) {
      $(this).attr("src", "/images/no-photo.jpg");
    }
  });
});