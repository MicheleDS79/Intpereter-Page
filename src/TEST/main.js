const sideBarEl = document.querySelector(".main-sidebar");
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener("click", ()=> {
    navEl.classList.toggle("main-sidebar--open");
    hamburgerEl.classList.toggle("hamburger--open");
});

navEl.addEventListener("click", ()=> {
    navEl.classList.remove("main-sidebar--open");
    hamburgerEl.classList.remove("hamburger--open");
});

function showSidebar() {
    const sidebar = document.querySelector('.main-sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.main-sidebar')
    sidebar.style.display = 'none'
}

showSidebar.addEventListener('click', openMobileMenu);
hideSidebar.addEventListener('click', closeMobileMenu);