const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Adjust this for responsive design
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('side-nav')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    closeAllSubmenu()

   
}

function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubmenu()
    }
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

function closeAllSubmenu(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul =>{
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}