let burger = document.getElementById('burger')
let navigationMenuContainer = document.getElementById('navigation_menu_container')

let toggleActiveClassToNavMenu = ()=>{
   navigation_menu_container.classList.toggle('active')
   burger.classList.toggle('active')
}
burger.addEventListener('click', toggleActiveClassToNavMenu)

$(document).ready(function(){
   if(window.screen.width <= 520)
      $('.clients_icons').slick()
})

