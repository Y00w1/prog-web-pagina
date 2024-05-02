let currentColor = "#2C3639";
const color1 = "#12372A";
const color2 = "#2C3639";


document.addEventListener('DOMContentLoaded', () => {
  const sectionContent = document.querySelector('.sec');
  const btnChangeBGColor = document.querySelector('.btn-change-bg-color');
  const bgFigure = document.querySelector('.clipPath-circle');
  const mainSec = document.querySelector('.main-sec');

  btnChangeBGColor.addEventListener('click', (e) => {
    e.preventDefault();
    sectionContent.style.background = currentColor;
    bgFigure.style.background = currentColor;
    bgFigure.classList.add('active');
    mainSec.classList.add('fade');

    currentColor = currentColor === color1 ? color2 : color1;
  });

  mainSec.addEventListener('animationend', () => {
    mainSec.classList.remove('fade');
    bgFigure.classList.remove('active');
  });

});