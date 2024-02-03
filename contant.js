const button = document.querySelector('.btns');
const form = document.querySelector('form');
const body=document.querySelector('.para');
const body1 = document.querySelector('.par');
const body2= document.querySelector('.pa');

button.addEventListener("click",function(){
    if (form.style.display === "none") {
        form.style.display = 'block'
        form.style.animation ="from infinite linear 5s"
        body.style.display = 'none'
        body1.style.display = 'none'
        body2.style.display = 'none'
    } else {
        form.style.display = 'none'
        body.style.display = 'block'
        body1.style.display = 'block'
        body2.style.display = 'block'
    }
});
const btnimg=document.querySelector('.btnimg');
const disimg= document.querySelector('.img2');
btnimg.addEventListener("click",()=>{
    if (disimg.style.display === "none"){
        disimg.style.display = "block"
        body.style.display='none'
        body1.style.display = 'none'
        body2.style.display = 'none'
    }else{
        disimg.style.display = "none"
        body.style.display='block'
        body1.style.display = 'block'
        body2.style.display = 'block'
    }
})