const input = document.querySelector('#name-input');
input.addEventListener('input', (value) => {
    value.target.value
        ? document.querySelector('#name-output').innerHTML = `${value.target.value}`
        : document.querySelector('#name-output').innerHTML = 'Anonymous'
});