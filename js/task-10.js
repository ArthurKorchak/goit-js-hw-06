const amount = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
let boxesAcc = '';
let size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  for (let i = 0; i < amount.value; i++) {
    boxesAcc += `<div style="background-color:${getRandomHexColor()}; width:${size}px; height:${size}px"></div>`;
    size += 10;
  }
  document.querySelector('#boxes').innerHTML = boxesAcc;
  amount.value = 0;
};

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
  boxesAcc = '';
  size = 30;
};

createBtn.addEventListener('click', () => createBoxes(amount));
destroyBtn.addEventListener('click', destroyBoxes);