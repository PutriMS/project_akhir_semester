const menu = document.querySelector('#mobilemenu')
const menuLinks = document.querySelector('.navbarmenu')

menu.addEventListener('click', function(){
    menu.classList.toggle('isactive')
    menuLinks.classList.toggle('active')
})