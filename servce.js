const button = document.querySelector('.btns');
const form = document.querySelector('form');
const out = document.querySelector('.out');
const p= document.querySelector('.para');

button.addEventListener("click", function () {
    if (form.style.display === "none") {
        p.style.display='none'
        out.style.display="none"
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
        out.style.display="block"
        p.style.display = 'block'
    }
});