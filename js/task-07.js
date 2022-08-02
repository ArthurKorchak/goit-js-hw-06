const input = document.querySelector('#font-size-control');
input.addEventListener('input', (event) =>
    document.querySelector('#text').style.fontSize = `${event.target.value}px`);