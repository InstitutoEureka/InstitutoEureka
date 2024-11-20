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


const courses = [
    { id: 1, name: "Matemáticas Avanzadas", schedule: "Lunes y Miércoles, 18:00 - 20:00", description: "Curso intensivo de cálculo y álgebra lineal para estudiantes de ingeniería y ciencias." },
    { id: 2, name: "Física Cuántica", schedule: "Martes y Jueves, 17:00 - 19:00", description: "Introducción a los principios de la mecánica cuántica y sus aplicaciones en la física moderna." },
    { id: 3, name: "Programación en Python", schedule: "Sábados, 10:00 - 14:00", description: "Aprende los fundamentos de la programación utilizando Python, desde lo básico hasta aplicaciones avanzadas." },
];

const tutors = [
    { id: 1, name: "Dra. Ana Martínez", subject: "Matemáticas", avatar: "../images/female.png", rating: 4.9, testimonial: "La Dra. Martínez explica los conceptos más complejos de una manera increíblemente clara. ¡Excelente tutora!" },
    { id: 2, name: "Dr. Carlos Rodríguez", subject: "Física", avatar: "../images/boy.png", rating: 4.8, testimonial: "El Dr. Rodríguez tiene una pasión contagiosa por la física. Sus clases son fascinantes y muy informativas." },
    { id: 3, name: "Ing. Laura Sánchez", subject: "Programación", avatar: "../images/tag.png", rating: 4.7, testimonial: "Laura tiene una habilidad única para hacer que la programación sea accesible y divertida. Altamente recomendada." },
];

function renderCourses() {
    const coursesContainer = document.querySelector('#cursos-content > div');
    coursesContainer.innerHTML = courses.map(course => `
        <div class="bg-white rounded-[10px] transition-all duration-500 ease-[cubic-bezier(0.175, 0.885, 0.32, 1.275)] shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),_0_0_0_2px_rgb(190,190,190),_0.3em_0.3em_1em_rgba(0,0,0,0.3)] p-6 transform">
            <h3 class="text-xl font-semibold mb-2">${course.name}</h3>
            <p class="text-gray-600 mb-4">${course.schedule}</p>
            <p class="mb-4">${course.description}</p>
            <a href="reservas.html"><button class="bg-[#FFC107] text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-[#FFD54F] transition duration-300">Reservar Clase</button></a>
        </div>
    `).join('');
}

function renderTutors() {
    const tutorsContainer = document.querySelector('#tutores-content > div');
    tutorsContainer.innerHTML = tutors.map(tutor => `
        <div class="bg-white rounded-[10px] transition-all duration-500 ease-[cubic-bezier(0.175, 0.885, 0.32, 1.275)] shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),_0_0_0_2px_rgb(190,190,190),_0.3em_0.3em_1em_rgba(0,0,0,0.3)] p-6 transform cursor-pointer" onclick="showTutorDetails(${tutor.id})">
            <div class="flex items-center gap-4 mb-4">
                <img src="${tutor.avatar}" alt="${tutor.name}" class="w-12 h-12 rounded-full">
                <div>
                    <h3 class="text-xl font-semibold">${tutor.name}</h3>
                    <p class="text-gray-600">${tutor.subject}</p>
                </div>
            </div>
            <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span class="ml-2">${tutor.rating}</span>
            </div>
        </div>
    `).join('');
}

function showTutorDetails(tutorId) {
    const tutor = tutors.find(t => t.id === tutorId);
    const tutorDetailsContainer = document.getElementById('tutor-details');
    tutorDetailsContainer.innerHTML = `
        <div class="bg-white shadow-md rounded-lg p-6">
            <h3 class="text-2xl font-semibold mb-2">${tutor.name}</h3>
            <p class="text-gray-600 mb-4">${tutor.subject}</p>
            <p class="italic mb-4">"${tutor.testimonial}"</p>
            <button class="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300" onclick="hideTutorDetails()">Cerrar</button>
        </div>
    `;
    tutorDetailsContainer.classList.remove('hidden');
}

function hideTutorDetails() {
    const tutorDetailsContainer = document.getElementById('tutor-details');
    tutorDetailsContainer.classList.add('hidden');
}

document.getElementById('cursos-tab').addEventListener('click', function() {
    this.classList.add('bg-white', 'border-b-2', 'border-blue-500');
    this.classList.remove('bg-gray-200');
    document.getElementById('tutores-tab').classList.add('bg-gray-200');
    document.getElementById('tutores-tab').classList.remove('bg-white', 'border-b-2', 'border-blue-500');
    document.getElementById('cursos-content').classList.remove('hidden');
    document.getElementById('tutores-content').classList.add('hidden');
    hideTutorDetails();
});

document.getElementById('tutores-tab').addEventListener('click', function() {
    this.classList.add('bg-white', 'border-b-2', 'border-blue-500');
    this.classList.remove('bg-gray-200');
    document.getElementById('cursos-tab').classList.add('bg-gray-200');
    document.getElementById('cursos-tab').classList.remove('bg-white', 'border-b-2', 'border-blue-500');
    document.getElementById('tutores-content').classList.remove('hidden');
    document.getElementById('cursos-content').classList.add('hidden');
    hideTutorDetails();
});

// Initial render
lucide.createIcons();
renderCourses();
renderTutors();

