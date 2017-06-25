$(document).ready(function() {
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  var scrolledDistance = 0;
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll - scrolledDistance > 50) {
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      scrolledDistance = scroll;
    } else if (scrolledDistance - scroll > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      scrolledDistance = scroll;
    }
  });
});
