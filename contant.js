const button = document.querySelector('.btns');
const form = document.querySelector('form');
const body=document.querySelector('p');
button.addEventListener("click",function(){
    if (form.style.display === "none") {
        form.style.display = 'block'
    } else {
        form.style.display = 'none'
    }
});
const btnimg=document.querySelector('.btnimg');
const disimg= document.querySelector('.img2');
btnimg.addEventListener("click",()=>{
    disimg.style.display="block"
})