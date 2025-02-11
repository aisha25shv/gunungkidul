
// side navbar
const navShowBtn = document.querySelector('.navbar-show-btn');
const navHideBtn = document.querySelector('.navbar-hide-btn');
const sideNavbar = document.getElementById('side-navbar');
navShowBtn.addEventListener('click', () => {
    sideNavbar.classList.add('side-navbar-show');
});

navHideBtn.addEventListener('click', () => {
    sideNavbar.classList.remove('side-navbar-show');
});

// activity
const activityItems = document.getElementById('sidenav-list-items');
const activityTogglerBtn = document.querySelector('.sidenav-toggler-btn');
activityTogglerBtn.addEventListener('click', () => {
    activityItems.classList.toggle('show-activity-items');
});