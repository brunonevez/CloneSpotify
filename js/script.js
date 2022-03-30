function menuToggle(){
    const toggleMenu = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.nav-list'); 
    const container = document.querySelector('.container');
    const listOcult = document.querySelector('.list-ocult');

    toggleMenu.classList.toggle('active');
    menuList.classList.toggle('active');
    container.classList.toggle('active'); 
    listOcult.classList.toggle('active');
}