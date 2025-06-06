const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 10,
    depth: 150,
    modifier: 1.5,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const typedSection = document.querySelector('#about');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      new Typed('#element', {
        strings: ['CMU Student', 'Coder', 'AI Enthusiast'],
        typeSpeed: 50,
        loop: true,
      });
    }
  });
});
observer.observe(typedSection);

const navLinks = document.querySelectorAll('.nav__list a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(el => el.classList.remove('active-link'));
    link.classList.add('active-link');
  });
});
