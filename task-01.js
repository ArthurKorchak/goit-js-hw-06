const mainUl = document.querySelector('#categories');
console.log(`Number of categories: ${mainUl.children.length}`);
[...mainUl.children].forEach(child => {
    console.log('');
    console.log(`Category: ${child.querySelector('h2').textContent}`);
    console.log(`Elements: ${child.querySelector('ul').children.length}`);
})