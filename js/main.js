const menuButton = document.querySelector('.btn-menu-bars');

function showMenu() {
    const menu = document.querySelector('.main-menu');
    menu.classList.toggle('show')
}

menuButton.addEventListener('click', showMenu)