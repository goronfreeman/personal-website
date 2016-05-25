$(document).ready(function() {
  $('.quotes, .about').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: false,
    infinte: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 8000
  })
});

$('nav > ul > li > a').click(function(e) {
  var href = $(this).attr('href');
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $(href).offset().top + 1
  });
});

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if (wScroll >= 815) {
    $('.project').addClass('play');
  }

  if (wScroll >= 1540) {
    $('.progress > li').addClass('play');
    $('.progress svg:nth-child(2) path').addClass('play');
  }

  if (wScroll >= 1850) {
    $('.experience').addClass('play');
  }

  console.log(wScroll);
});
