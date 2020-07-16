window.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu__item');
    const title = document.querySelector('.main__title');
    const burger = document.querySelector('.burger_menu');
    const menu = document.querySelector('.menu');
    const search = document.querySelector('.main__search');
    const input = document.querySelector('.main__search input');
    const searchImg = document.querySelector('.main__search img');

    window.addEventListener('scroll', () => {
        searchImg.style.display = `block`;
        input.style.paddingLeft = `${44}px`;
        input.style.fontSize = `${18}px`;
        if(window.innerWidth >= 1100) return;
        if(window.pageYOffset > 30) {
            if(window.innerWidth < 370){
                search.style.width = `${219}px`;
                search.style.marginLeft = `auto`;
                input.style.paddingLeft = `${15}px`;
                input.style.fontSize = `${14}px`;
                searchImg.style.display = `none`;
                return
            }
            if(window.innerWidth < 725 && window.innerWidth > 481){
                search.style.width = `${350}px`;
                search.style.marginLeft = `auto`;
                return
            }
            if(window.innerWidth < 480){
                search.style.width = `${250}px`;
                search.style.marginLeft = `auto`;
                input.style.fontSize = `${15}px`;
                input.style.paddingLeft = `${15}px`;
                searchImg.style.display = `none`;
                return
            }
            search.style.width = `${561}px`;
            search.style.marginLeft = `auto`;
            
        } else search.style.width = `${100}%`
        
    })
    burger.addEventListener('click', () => {
        burger.classList.toggle('active_burger');
        if(window.innerWidth < 380) {
            menu.classList.toggle('active_menu_phone');
            return
        }
        menu.classList.toggle('active_menu_tablet');
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