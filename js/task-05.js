const input = document.querySelector('#name-input');
input.addEventListener('input', (event) => {
    event.target.value
        ? document.querySelector('#name-output').innerHTML = `${event.target.value}`
        : document.querySelector('#name-output').innerHTML = 'Anonymous'
});