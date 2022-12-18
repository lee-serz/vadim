let text = document.querySelectorAll('.hidden');
let button = document.querySelector('.button');

button.onclick = function() {
    text.forEach(x => x.classList.toggle('visible'));   
}