const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

//display mobile-menu
const mobileMenu = ()=>{
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};
menu.addEventListener('click',mobileMenu);

//close mobile menu when clicking on a menu item
const hideMobileMenu = ()=>{
    const menuBars=document.querySelector('.is-active');
    if(window.innerWidth<=768 && menuBars)
    {
        menu.classList.toggle('is-active');
        menulinks.classList.remove('active');
    }
}
menulinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);

function myFunction(){
    window.location="https://docs.google.com/forms/d/e/1FAIpQLSfwjl1kZ-6oQbIGmcUzX-6AIfmEL4LMisENqTiPBl8es-rnEA/viewform";
    
}
function myWhatsapp1(){
    window.location="https://chat.whatsapp.com/D9XDpFGBpmr7ejAajoZfVV";
}
function myWhatsapp2(){
    window.location="https://chat.whatsapp.com/LuynSCASLEJAsAPv9JSvyu";
}
function myWhatsapp3(){
    window.location="https://chat.whatsapp.com/CMjAtPUBZ6cD9ZhTKmmew8";
}
function myTelegram1(){
    window.location="";
}
function myTelegram2(){
    window.location="";
}
function myTelegram3(){
    window.location="";
}
