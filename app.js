const navMenu = document.querySelector('.menu-mobile');
const menu = document.querySelector('#nav-icon');
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  navMenu.classList.toggle('open');
});

const cardsContainer = document.querySelector('.cards');
let isDown = false;
let startX;
let scrollLeft;

cardsContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  cardsContainer.classList.add('active');
  startX = e.pageX - cardsContainer.offsetLeft;
  scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener('mouseleave', () => {
  isDown = false;
  cardsContainer.classList.remove('active');
});

cardsContainer.addEventListener('mouseup', () => {
  isDown = false;
  cardsContainer.classList.remove('active');
});

cardsContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardsContainer.offsetLeft;
  const walk = (x - startX) * 1.2; // Valor de multiplicação ajusta a sensibilidade
  cardsContainer.scrollLeft = scrollLeft - walk;
});

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.custom-carousel .item');

  items.forEach((item) => {
    item.addEventListener('click', function () {
      items.forEach((i) => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
