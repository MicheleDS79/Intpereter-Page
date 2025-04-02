function showSidebar() {
    const sidebar = document.querySelector('.main-sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.main-sidebar')
    sidebar.style.display = 'none'
}
/* open/close hamburger menu, will add effects later*/

const buttons =
document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click",
() => {
    const currentState = 
button.getAttribute("data-state");

    if (!currentState || 
currentState === "closed") {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "expanded", "true");
} else {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
        } 
    });
});

showSidebar.addEventListener('click', openMobileMenu);
hideSidebar.addEventListener('click', closeMobileMenu);

        


    
