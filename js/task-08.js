const form = document.querySelector('.login-form');
form.addEventListener('submit', (event) => {  
    event.preventDefault();
    let { email, password } = event.target.elements;
    email = email.value;
    password = password.value;
    if (!email || !password) {
        alert('Виявлено незаповнене поле!');
    } else {
        const resultObj = { email, password };
        console.log(resultObj);
        form.reset();
    };
});