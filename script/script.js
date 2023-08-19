const swiper = new swiper('.swiper', {
    // Optional parameters
    cssMode: true,
    loop: true,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });