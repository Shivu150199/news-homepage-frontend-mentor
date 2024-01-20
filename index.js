const closeBtn=document.querySelector('.close-btn')

const menu=document.querySelector('.menu')
const sidebar=document.querySelector('.sidebar')
console.log(closeBtn)
console.log(menu)
menu.addEventListener('click',()=>{
sidebar.classList.toggle('hide')
// sidebar.style.width = '70%'
})
closeBtn.addEventListener('click',()=>{
    console.log('hello')
sidebar.classList.toggle('hide')

})