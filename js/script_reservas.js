// Selección de elementos del DOM
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobile-menu');
const htmlElement = document.documentElement;

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-blue-700', 'text-white', 'scale-105', 'shadow-lg');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual
    document.querySelectorAll('.mobile-link').forEach(link => {
        if (link.getAttribute('href').endsWith(currentPath)) {
            link.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-blue-700', 'text-white' , 'shadow-lg');
        }
    });
});

function getIcon(type) {
    switch (type) {
        case "pdf":
            return '<i data-lucide="file-text" class="w-6 h-6"></i>';
        case "guia":
            return '<i data-lucide="book-open" class="w-6 h-6"></i>';
        case "articulo":
            return '<i data-lucide="newspaper" class="w-6 h-6"></i>';
        default:
            return '';
    }
}


document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const course = document.getElementById('course').value;
    const tutor = document.getElementById('tutor').value;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;

    if (!course || !tutor || !date || !email) {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Simular el envío de un recordatorio por correo electrónico
    console.log(`Enviando recordatorio a ${email} para la clase de ${course} con ${tutor} el ${date}`);

    alert('Reserva exitosa. Se ha enviado un recordatorio a su correo electrónico.');

    // Reiniciar el formulario
    this.reset();
});