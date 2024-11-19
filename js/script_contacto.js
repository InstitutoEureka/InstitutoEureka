// Selección de elementos del DOM
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobile-menu');
const htmlElement = document.documentElement;

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
// function initMap() {
//     const institutoEureka = { lat: 40.416775, lng: -3.703790 }; // Coordenadas de ejemplo (Madrid)
//     const map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 15,
//         center: institutoEureka
//     });
//     const marker = new google.maps.Marker({
//         position: institutoEureka,
//         map: map,
//         title: 'Instituto Eureka'
//     });
// }



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

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Aquí normalmente enviarías los datos a un servidor
    console.log('Formulario enviado:', { name, email, subject, message });

    // Simulamos una respuesta exitosa
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    this.reset();
});

// window.initMap = function() {
//     // Coordenadas de ejemplo: Madrid
//     const institutoEureka = { lat: 40.416775, lng: -3.703790 };

//     // Inicializar el mapa
//     const map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 15,               // Nivel de zoom
//         center: institutoEureka // Coordenadas del centro
//     });

//     // Agregar un marcador
//     new google.maps.Marker({
//         position: institutoEureka,
//         map: map,
//         title: 'Instituto Eureka' // Texto al pasar el cursor
//     });
// };

