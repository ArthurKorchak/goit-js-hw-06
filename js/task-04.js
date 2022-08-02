let counterValue = 0;
const countUp = document.querySelector('button[data-action="increment"]');
const countDown = document.querySelector('button[data-action="decrement"]');
countUp.addEventListener('click', () => {
    counterValue += 1;
    document.querySelector('#value').innerHTML = `${counterValue}`;
});
countDown.addEventListener('click', () => {
    counterValue -= 1;
    document.querySelector('#value').innerHTML = `${counterValue}`;
});

