import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/buttons.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/js__examples.css'
import '../styles/components/about.css'
import '../styles/components/about-page.css'
import '../styles/components/contact.css'
import '../styles/components/khyle.css'
import '../styles/components/diego.css'
import '../styles/components/footer.css'
import '../styles/utils.css'

import darkMode from './utils/dark-mode';

darkMode();

import { showAlert } from './utils/alert-box.js';

document.getElementById('alert-button').addEventListener('click', () => {
  showAlert('This is an alert box example!');
});

import { changeText } from './utils/change-txt.js';

document.getElementById('change-text-button').addEventListener('click', () => {
  changeText('The text has been successfully changed!');
});

import { changeBackgroundColor, resetBackgroundColor } from './utils/cn-bg.js';

document.getElementById('change-bg-button').addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  changeBackgroundColor(randomColor);
});

document.getElementById('reset-bg-button').addEventListener('click', () => {
  resetBackgroundColor();
});

import { toggleElementVisibility } from './utils/cn-element.js';

document.getElementById('toggle-element-button').addEventListener('click', () => {
  toggleElementVisibility('element-to-toggle');
});

import { increaseCounter, decreaseCounter, resetCounter } from './utils/count.js';

document.getElementById('increase-counter-button').addEventListener('click', () => {
  increaseCounter();
});

document.getElementById('decrease-counter-button').addEventListener('click', () => {
  decreaseCounter();
});

document.getElementById('reset-counter-button').addEventListener('click', () => {
  resetCounter();
});

import { changeFontSize } from './utils/tog-vis.js';

document.getElementById('increase-font-button').addEventListener('click', () => {
  changeFontSize('font-size-target', 'increase');
});

document.getElementById('decrease-font-button').addEventListener('click', () => {
  changeFontSize('font-size-target', 'decrease');
});

document.getElementById('reset-font-button').addEventListener('click', () => {
  changeFontSize('font-size-target', 'reset');
});

import { changeImage } from './utils/cn-img.js';

document.getElementById('change-image-button').addEventListener('click', () => {
  changeImage('image-to-change', 'img2.jpg'); 
});

import { changeTextColorOnHover } from './utils/ms-over.js';

changeTextColorOnHover('mouse-over-target', '#4f46e5', 'black'); 

import { displayCurrentDate, resetDateDisplay } from './utils/date.js';

document.getElementById('display-date-button').addEventListener('click', () => {
  displayCurrentDate('current-date-display');
});

document.getElementById('reset-date-button').addEventListener('click', () => {
  resetDateDisplay('current-date-display');
});