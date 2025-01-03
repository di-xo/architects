const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.header-nav');

if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('bodyOverflowToggle');
  })
}
