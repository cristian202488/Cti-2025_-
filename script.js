const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i'); // Selecciona el ícono dentro del botón

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun'); // Cambia a ícono de sol
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon'); // Cambia a ícono de luna
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    }
}

// Alternar entre temas
themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon'); // Cambia a ícono de luna
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun'); // Cambia a ícono de sol
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    }
});