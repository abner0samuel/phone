const button = document.querySelector('.btns');
const form = document.querySelector('form');
const body=document.querySelector('p');
button.addEventListener("click",function(){
    if(form.style.display==="none"){
        body.style.display = 'none'
        form.style.display = 'block'
    }else{
        form.style.display = 'none'
        body.style.display = 'block'
    }
})
// document.addEventListener('click',()=>{
//     form.style.display='none'
// })
