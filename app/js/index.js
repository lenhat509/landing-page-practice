const header = document.querySelector('.header');
const btnMenu = document.querySelector('#btnMenu');
const overlay = document.querySelector('.overlay');
const dropMenu = document.querySelector(".header__drop-menu")
const body = document.querySelector('body')

if(btnMenu)
{
    btnMenu.addEventListener('click', () => {
        if(header.classList.toggle('open'))
        {
            // drop-down menu open
            overlay.classList.add('fade-in')
            overlay.classList.remove('fade-out')
            dropMenu.classList.add('fade-in')
            dropMenu.classList.remove('fade-out')
            body.classList.add('noscroll')
    
        } else {
            overlay.classList.remove('fade-in')
            overlay.classList.add('fade-out')
            dropMenu.classList.remove('fade-in')
            dropMenu.classList.add('fade-out')
            body.classList.remove('noscroll')
        }
    })
}
