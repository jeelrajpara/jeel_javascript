const navbarLinks = document.querySelectorAll('.navbar a');
const sideNavLinks = document.querySelectorAll('.side-nav a');
function removeActiveClass(links) {
    links.forEach(link => {
        link.classList.remove('active');
    });
}
navbarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        removeActiveClass(navbarLinks);
        link.classList.add('active');
    });
});

sideNavLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        removeActiveClass(sideNavLinks);
        link.classList.add('active');
    });
});

