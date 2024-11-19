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
    { id: 1, type: "pdf", name: "Fundamentos de Cálculo", description: "PDF con los conceptos básicos del cálculo diferencial e integral", url: "/recursos/fundamentos-calculo.pdf" },
    { id: 2, type: "guia", name: "Guía de Estudio: Física Cuántica", description: "Guía completa para el estudio de los principios de la física cuántica", url: "/recursos/guia-fisica-cuantica.pdf" },
    { id: 3, type: "articulo", name: "Introducción a Machine Learning", description: "Artículo sobre los fundamentos del aprendizaje automático", url: "/recursos/intro-machine-learning.pdf" },
    { id: 4, type: "pdf", name: "Manual de Programación en Python", description: "PDF con ejemplos y ejercicios de programación en Python", url: "/recursos/manual-python.pdf" },
    { id: 5, type: "guia", name: "Guía Rápida: Álgebra Lineal", description: "Resumen de los conceptos clave en álgebra lineal", url: "/recursos/guia-algebra-lineal.pdf" },
    { id: 6, type: "articulo", name: "Avances en Inteligencia Artificial", description: "Artículo sobre los últimos avances en IA y sus aplicaciones", url: "/recursos/avances-ia.pdf" },
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
let discussions = [
    {
        id: 1,
        title: "¿Cómo resolver integrales por partes?",
        author: "Maria García",
        content: "Estoy teniendo dificultades para entender el método de integración por partes. ¿Alguien podría explicarlo de manera sencilla?",
        likes: 5,
        replies: [
            { id: 1, author: "Prof. Martínez", content: "La integración por partes es una técnica que se usa cuando tienes que integrar el producto de dos funciones. La fórmula básica es: ∫u dv = uv - ∫v du. Primero, identifica qué parte será 'u' y qué parte será 'dv'.", likes: 3 },
            { id: 2, author: "Carlos Ruiz", content: "Un buen truco para recordar qué elegir como 'u' es LIATE: Logarítmicas, Inversas trigonométricas, Algebraicas, Trigonométricas, Exponenciales. Elige 'u' de izquierda a derecha en esta lista.", likes: 2 }
        ]
    },
    {
        id: 2,
        title: "Duda sobre la paradoja del gato de Schrödinger",
        author: "Luis Hernández",
        content: "No logro entender completamente la paradoja del gato de Schrödinger. ¿Alguien podría explicarla de forma simple?",
        likes: 7,
        replies: [
            { id: 1, author: "Ana Sánchez", content: "La paradoja del gato de Schrödinger es un experimento mental en física cuántica. Imagina un gato en una caja cerrada con un dispositivo que puede matar al gato basado en un evento cuántico aleatorio. Según la interpretación de Copenhague de la mecánica cuántica, hasta que abramos la caja y observemos, el gato está en un estado de superposición, vivo y muerto al mismo tiempo.", likes: 4 }
        ]
    }
];
