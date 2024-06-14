$(document).ready(function() {
    $('.card-slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });