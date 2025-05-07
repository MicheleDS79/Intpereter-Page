/* sidebar open/close + animation */

function showSidebar() {
    const sidebar = document.querySelector('.main-sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const openButton = document.querySelector('button[onclick="showSidebar()"]');
    if (openButton) {
        openButton.setAttribute('aria-expanded', 'true');
    }
}

function hideSidebar() {
    const sidebar = document.querySelector('.main-sidebar');
    sidebar.style.display = 'none'
}

const closeButton = document.querySelector('button[onclick="hideSidebar()"]');
if (closeButton) {
    closeButton.setAttribute('aria-expanded', 'false');
}




    
