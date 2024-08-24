document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const gridItems = document.querySelectorAll('.grid-item');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            gridItems.forEach(item => item.classList.remove('active'));

            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.classList.add('active');

            // Quitar la clase 'active' después de 3 segundos
            setTimeout(() => {
                targetSection.classList.remove('active');
            }, 1000); // 3000 milisegundos = 3 segundos
        });
    });
});
