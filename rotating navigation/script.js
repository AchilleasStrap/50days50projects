var open = document.getElementById('open');
var container = document.querySelector('.container');
var close = document.getElementById('close');
open.addEventListener ('click',()=>{
    container.classList.add('show-nav');
})
close.addEventListener('click',()=>{
    container.classList.remove('show-nav');
})
