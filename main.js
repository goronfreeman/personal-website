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
