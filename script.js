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

document.getElementById('calculate-btn').addEventListener('click', function() {
    const numClasses = document.getElementById('num-classes').value;
    const costPerClass = 50; // Precio por clase en dólares
    const totalCost = numClasses * costPerClass;
    document.getElementById('total-cost').value = `$${totalCost}`;
});
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

function renderDiscussions() {
    const container = document.getElementById('discussionsContainer');
    container.innerHTML = discussions.map(discussion => `
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${discussion.title}</h3>
                <p class="text-gray-600 mb-4">Por ${discussion.author}</p>
                <p class="mb-4">${discussion.content}</p>
                <div class="flex items-center space-x-4">
                    <button class="flex items-center space-x-1 text-gray-600 hover:text-blue-500" onclick="handleLike(${discussion.id})">
                        <i data-lucide="thumbs-up"></i>
                        <span>${discussion.likes}</span>
                    </button>
                    <button class="flex items-center space-x-1 text-gray-600 hover:text-blue-500" onclick="toggleReplies(${discussion.id})">
                        <i data-lucide="message-circle"></i>
                        <span>${discussion.replies.length} Respuestas</span>
                    </button>
                </div>
            </div>
            <div id="replies-${discussion.id}" class="hidden bg-gray-50 p-6 space-y-4">
                ${discussion.replies.map(reply => `
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-center mb-2">
                            <div class="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                            <span class="font-semibold">${reply.author}</span>
                        </div>
                        <p>${reply.content}</p>
                        <button class="mt-2 text-gray-600 hover:text-blue-500" onclick="handleReplyLike(${discussion.id}, ${reply.id})">
                            <i data-lucide="thumbs-up"></i>
                            ${reply.likes}
                        </button>
                    </div>
                `).join('')}
                <form onsubmit="handleNewReply(event, ${discussion.id})">
                    <input type="text" placeholder="Escribe una respuesta..." class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <button type="submit" class="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        <i data-lucide="send"></i>
                    </button>
                </form>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function handleNewDiscussion(event) {
    event.preventDefault();
    const title = document.getElementById('discussionTitle').value;
    const content = document.getElementById('discussionContent').value;
    if (title && content) {
        const newDiscussion = {
            id: discussions.length + 1,
            title: title,
            author: "Usuario Anónimo",
            content: content,
            likes: 0,
            replies: []
        };
        discussions.unshift(newDiscussion);
        renderDiscussions();
        document.getElementById('newDiscussionForm').reset();
    }
}

function handleLike(discussionId) {
    const discussion = discussions.find(d => d.id === discussionId);
    if (discussion) {
        discussion.likes++;
        renderDiscussions();
    }
}

function toggleReplies(discussionId) {
    const repliesElement = document.getElementById(`replies-${discussionId}`);
    repliesElement.classList.toggle('hidden');
}

function handleReplyLike(discussionId, replyId) {
    const discussion = discussions.find(d => d.id === discussionId);
    if (discussion) {
        const reply = discussion.replies.find(r => r.id === replyId);
        if (reply) {
            reply.likes++;
            renderDiscussions();
        }
    }
}

function handleNewReply(event, discussionId) {
    event.preventDefault();
    const replyContent = event.target.querySelector('input').value;
    if (replyContent) {
        const discussion = discussions.find(d => d.id === discussionId);
        if (discussion) {
            discussion.replies.push({
                id: discussion.replies.length + 1,
                author: "Usuario Anónimo",
                content: replyContent,
                likes: 0
            });
            renderDiscussions();
            event.target.reset();
        }
    }
}

document.getElementById('newDiscussionForm').addEventListener('submit', handleNewDiscussion);

// Initial render
renderDiscussions();
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

// Initial render
renderFAQs(faqs);
const courses = [
    { id: 1, name: "Matemáticas Avanzadas", schedule: "Lunes y Miércoles, 18:00 - 20:00", description: "Curso intensivo de cálculo y álgebra lineal para estudiantes de ingeniería y ciencias." },
    { id: 2, name: "Física Cuántica", schedule: "Martes y Jueves, 17:00 - 19:00", description: "Introducción a los principios de la mecánica cuántica y sus aplicaciones en la física moderna." },
    { id: 3, name: "Programación en Python", schedule: "Sábados, 10:00 - 14:00", description: "Aprende los fundamentos de la programación utilizando Python, desde lo básico hasta aplicaciones avanzadas." },
];

const tutors = [
    { id: 1, name: "Dra. Ana Martínez", subject: "Matemáticas", avatar: "/placeholder.svg", rating: 4.9, testimonial: "La Dra. Martínez explica los conceptos más complejos de una manera increíblemente clara. ¡Excelente tutora!" },
    { id: 2, name: "Dr. Carlos Rodríguez", subject: "Física", avatar: "/placeholder.svg", rating: 4.8, testimonial: "El Dr. Rodríguez tiene una pasión contagiosa por la física. Sus clases son fascinantes y muy informativas." },
    { id: 3, name: "Ing. Laura Sánchez", subject: "Programación", avatar: "/placeholder.svg", rating: 4.7, testimonial: "Laura tiene una habilidad única para hacer que la programación sea accesible y divertida. Altamente recomendada." },
];

function renderCourses() {
    const coursesContainer = document.querySelector('#cursos-content > div');
    coursesContainer.innerHTML = courses.map(course => `
        <div class="bg-white shadow-md rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-2">${course.name}</h3>
            <p class="text-gray-600 mb-4">${course.schedule}</p>
            <p class="mb-4">${course.description}</p>
            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Reservar Clase</button>
        </div>
    `).join('');
}

function renderTutors() {
    const tutorsContainer = document.querySelector('#tutores-content > div');
    tutorsContainer.innerHTML = tutors.map(tutor => `
        <div class="bg-white shadow-md rounded-lg p-6 cursor-pointer" onclick="showTutorDetails(${tutor.id})">
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
renderCourses();
renderTutors();
// Inicializar iconos de Lucide
lucide.createIcons();

// Manejar el envío del formulario
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

// Función para inicializar el mapa de Google
function initMap() {
    const institutoEureka = { lat: 40.416775, lng: -3.703790 }; // Coordenadas de ejemplo (Madrid)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: institutoEureka
    });
    const marker = new google.maps.Marker({
        position: institutoEureka,
        map: map,
        title: 'Instituto Eureka'
    });
}