const input = document.querySelector('#validation-input');
input.addEventListener('blur', (event) => {
    Number(input.getAttribute('data-length')) === event.target.value.length
        ? input.setAttribute('id', 'validation-input.valid')
        : input.setAttribute('id', 'validation-input.invalid')
});