const input = document.querySelector('#validation-input');
input.addEventListener('blur', (event) => {
    Number(input.getAttribute('data-length')) === event.target.value.length
        ? input.setAttribute('class', 'valid')
        : input.setAttribute('class', 'invalid')
});