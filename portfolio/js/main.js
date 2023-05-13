//OWL
$(document).ready(function () {
  $('#carrosel1').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3500,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
$(document).ready(function () {
  $('#carrosel2').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      300: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

$(document).ready(function () {
  setTimeout(carregarFront, 3000);
});

function carregarFront() {
  $('#front').show();
}

$(document).ready(function () {
  setTimeout(carregar, 5000);
});

function carregar() {
  $('#back').show();
}
