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

const faqs = [
    {
        question: "¿Cómo puedo inscribirme en un curso?",
        answer: "Para inscribirte en un curso, primero debes crear una cuenta en nuestra plataforma. Luego, navega hasta la página de cursos, selecciona el curso que te interesa y haz clic en el botón 'Inscribirse'. Sigue las instrucciones para completar el proceso de pago y ¡listo! Tendrás acceso inmediato al contenido del curso."
    },
    {
        question: "¿Cuáles son los métodos de pago aceptados?",
        answer: "Aceptamos varios métodos de pago para tu comodidad. Puedes pagar con tarjetas de crédito/débito (Visa, MasterCard, American Express), PayPal, y transferencia bancaria. Para algunos cursos, también ofrecemos la opción de pago en cuotas."
    },
    {
        question: "¿Puedo obtener un reembolso si no estoy satisfecho con el curso?",
        answer: "Sí, ofrecemos una garantía de devolución de dinero de 30 días. Si no estás satisfecho con el curso dentro de los primeros 30 días después de la inscripción, puedes solicitar un reembolso completo. Para hacerlo, contacta a nuestro equipo de soporte a través de la página de contacto."
    },
    {
        question: "¿Los cursos tienen una fecha de inicio y finalización específica?",
        answer: "La mayoría de nuestros cursos son de ritmo libre, lo que significa que puedes comenzar en cualquier momento y avanzar a tu propio ritmo. Sin embargo, algunos cursos especializados pueden tener fechas específicas de inicio y finalización. Esta información se indicará claramente en la descripción del curso."
    },
    {
        question: "¿Cómo puedo contactar a mi tutor si tengo preguntas durante el curso?",
        answer: "Cada curso tiene un foro de discusión donde puedes publicar tus preguntas y los tutores responderán en un plazo de 24-48 horas. Además, dependiendo del curso, podrías tener la opción de programar sesiones individuales con tu tutor a través de nuestra plataforma de videoconferencia."
    },
    {
        question: "¿Recibo algún certificado al completar un curso?",
        answer: "Sí, al completar satisfactoriamente un curso, recibirás un certificado digital de finalización. Este certificado incluirá el nombre del curso, la duración, y tu nombre. Puedes descargarlo directamente desde tu perfil en la plataforma y compartirlo en redes profesionales como LinkedIn."
    },
    {
        question: "¿Ofrecen descuentos para estudiantes o grupos?",
        answer: "Sí, ofrecemos descuentos especiales para estudiantes con identificación válida y para grupos de 5 o más personas que se inscriban juntos en un curso. Para obtener más información sobre estos descuentos, por favor contacta a nuestro equipo de ventas a través de la página de contacto."
    },
    {
        question: "¿Cuál es la política de asistencia para las clases en vivo?",
        answer: "Para las clases en vivo, recomendamos una asistencia del 80% para obtener el máximo beneficio del curso. Sin embargo, entendemos que pueden surgir conflictos, por lo que todas las sesiones en vivo se graban y están disponibles para su revisión posterior. La asistencia no afecta la obtención del certificado, pero participar en las sesiones en vivo te permite interactuar directamente con el instructor y otros estudiantes."
    }
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


function renderFAQs(filteredFAQs) {
    const container = document.getElementById('faqContainer');
    container.innerHTML = filteredFAQs.map((faq, index) => `
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <button class="w-full text-left px-6 py-4 focus:outline-none" onclick="toggleAnswer(${index})">
                <div class="flex items-center justify-between">
                    <h3 class="text-lg font-semibold">${faq.question}</h3>
                    <svg class="w-5 h-5 transform transition-transform duration-200" id="arrow-${index}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </button>
            <div class="px-6 py-4 bg-gray-50 hidden" id="answer-${index}">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');

    document.getElementById('noResults').style.display = filteredFAQs.length === 0 ? 'block' : 'none';
}

function toggleAnswer(index) {
    const answerElement = document.getElementById(`answer-${index}`);
    const arrowElement = document.getElementById(`arrow-${index}`);
    answerElement.classList.toggle('hidden');
    arrowElement.classList.toggle('rotate-180');
}

function filterFAQs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredFAQs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm) || 
        faq.answer.toLowerCase().includes(searchTerm)
    );
    renderFAQs(filteredFAQs);
}

document.getElementById('searchInput').addEventListener('input', filterFAQs);

// // Initial render
renderFAQs(faqs);