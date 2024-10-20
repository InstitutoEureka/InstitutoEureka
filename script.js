// Selección de elementos del DOM
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobile-menu');
const htmlElement = document.documentElement;

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});




// Formulario de contacto 
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aquí normalmente enviarías los datos a un servidor
        console.log('Formulario enviado:', { name, email, message });
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        contactForm.reset();
    });
}
