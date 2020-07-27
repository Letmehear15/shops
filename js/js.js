window.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu__item');
    const title = document.querySelector('.main__title');
    const burger = document.querySelector('.burger_menu');
    const menu = document.querySelector('.menu');
    const cards = document.querySelectorAll('.main__item')
    const cardsTitle = document.querySelectorAll('.item_title')
    const cardsImg = document.querySelectorAll('.rightSide img')
    const modal = document.querySelector('.modal__wrapper')
    const modalTitle = document.querySelector('.modal__title')
    const modalImg = document.querySelector('.modal__img img')
    const close = document.querySelector('.close')

    burger.addEventListener('click', () => {
        burger.classList.toggle('active_burger');
        if(window.innerWidth < 380) {
            menu.classList.toggle('active_menu_phone');
            return
        }
        menu.classList.toggle('active_menu_tablet');
    })
    cards.forEach((el, index) => {
        el.addEventListener("click", function()  {
            modal.style.display = 'flex';
            modalTitle.textContent = cardsTitle[index].textContent;
            modalImg.src = cardsImg[index].src
        })
    })
    close.addEventListener('click', () => {
        modal.style.display = 'none'
    })
    menuItems.forEach(el => {
        el.addEventListener('click', (e) => {
            clearClass();
            el.classList.add('active')
            title.textContent = el.textContent;
        })
    })
    function clearClass() {
        menuItems.forEach(el => {
            el.classList.remove("active")
        })
    }
})