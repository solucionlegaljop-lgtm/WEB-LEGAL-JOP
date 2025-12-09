document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el recargo de la página

            // --- Obtener valores y quitar espacios vacíos ---
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const phone = document.getElementById('phone').value.trim();

            // --- Validación Básica ---
            if (!name || !email || !message) {
                formMessage.textContent = '⚠️ Por favor, completa los campos requeridos.';
                formMessage.style.color = '#d9534f'; // Rojo suave
                return;
            }

            // --- Validación simple de Email ---
            if (!email.includes('@') || !email.includes('.')) {
                formMessage.textContent = '⚠️ Por favor, ingresa un correo electrónico válido.';
                formMessage.style.color = '#d9534f';
                return;
            }

            // --- Simulación de Envío Exitoso ---
            // Aquí conectarías con tu backend (PHP/WordPress/API)
            console.log('Formulario válido. Datos:', { name, email, phone, message });
            
            // Mensaje de éxito
            formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Consulta enviada. Nos pondremos en contacto pronto.';
            formMessage.style.color = '#28a745'; // Verde éxito
            
            // Efecto visual en el botón (opcional)
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Enviado';
            btn.style.backgroundColor = '#28a745';

            // Limpiar formulario después de 3 segundos
            setTimeout(() => {
                contactForm.reset();
                formMessage.textContent = '';
                btn.textContent = originalText;
                btn.style.backgroundColor = ''; // Volver al color original (CSS)
            }, 4000); 
        });
    }
});

// --- FUNCIONES PARA LOS MODALES ---

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex"; // Usamos flex para centrar
        document.body.style.overflow = "hidden"; // Evita que se mueva la página de fondo
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Reactiva el scroll
    }
}

// Cerrar modal si se hace clic fuera de la caja blanca
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}