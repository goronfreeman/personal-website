$(document).ready(function() {
  $('.quotes, .about').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinte: true,
    autoplaySpeed: 8000
  })
});

$('nav > ul > li > a').click(function(e) {
  var href = $(this).attr('href');
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $(href).offset().top
  });
});
