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