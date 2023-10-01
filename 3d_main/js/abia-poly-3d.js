document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navList = document.querySelector('nav ul');

    toggleMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});