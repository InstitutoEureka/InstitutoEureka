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


const resources = [
    { id: 1, type: "pdf", name: "Fundamentos de Cálculo", description: "PDF con los conceptos básicos del cálculo diferencial e integral", url: "https://www.google.com/" },
    { id: 2, type: "guia", name: "Guía de Estudio: Física Cuántica", description: "Guía completa para el estudio de los principios de la física cuántica", url: "https://www.google.com/" },
    { id: 3, type: "articulo", name: "Introducción a Machine Learning", description: "Artículo sobre los fundamentos del aprendizaje automático", url: "https://www.google.com/" },
    { id: 4, type: "pdf", name: "Manual de Programación en Python", description: "PDF con ejemplos y ejercicios de programación en Python", url: "https://www.google.com/" },
    { id: 5, type: "guia", name: "Guía Rápida: Álgebra Lineal", description: "Resumen de los conceptos clave en álgebra lineal", url: "https://www.google.com/" },
    { id: 6, type: "articulo", name: "Avances en Inteligencia Artificial", description: "Artículo sobre los últimos avances en IA y sus aplicaciones", url: "https://www.google.com/" },
];

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

function renderResources(filteredResources) {
    const container = document.getElementById('resourcesContainer');
    container.innerHTML = filteredResources.map(resource => `
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-6">
                <div class="flex items-center gap-2 mb-2">
                    ${getIcon(resource.type)}
                    <h3 class="text-xl font-semibold">${resource.name}</h3>
                </div>
                <p class="text-gray-600 mb-2">${resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</p>
                <p class="mb-4">${resource.description}</p>
                <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="block w-full bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Descargar</a>
            </div>
        </div>
    `).join('');

    lucide.createIcons();

    document.getElementById('noResults').style.display = filteredResources.length === 0 ? 'block' : 'none';
}

function filterResources() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeFilter = document.querySelector('.border-blue-500').dataset.filter;

    const filteredResources = resources.filter(resource => 
        (resource.name.toLowerCase().includes(searchTerm) || resource.description.toLowerCase().includes(searchTerm)) &&
        (activeFilter === 'todos' || resource.type === activeFilter)
    );

    renderResources(filteredResources);
}

document.getElementById('searchInput').addEventListener('input', filterResources);

document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('[data-filter]').forEach(btn => {
            btn.classList.remove('bg-white', 'border-b-2', 'border-blue-500');
            btn.classList.add('bg-gray-200');
        });
        this.classList.add('bg-white', 'border-b-2', 'border-blue-500');
        this.classList.remove('bg-gray-200');
        filterResources();
    });
});

// Initial render
renderResources(resources);
lucide.createIcons();
