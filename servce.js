const button = document.querySelector('.btns');
const form = document.querySelector('form');
const p= document.querySelector('.para');
const p1 = document.querySelector('.par');
const p2 = document.querySelector('.pa');

button.addEventListener("click", function () {
    if (form.style.display === "none") {
        p.style.display='none'
        p1.style.display = 'none'
        p2.style.display = 'none'
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
        p.style.display = 'block'
        p1.style.display = 'block'
        p2.style.display = 'block'
    }
});