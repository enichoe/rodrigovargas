document.addEventListener('DOMContentLoaded', function() {
    // Navbar Scroll Effect
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if(menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            });
        });
    }

    // Smooth Scroll for local links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission simulation
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input');
            const name = inputs[0].value;
            const eventType = inputs[1].value;
            const date = inputs[2].value;
            const message = form.querySelector('textarea').value;
            const phoneNumber = "51992864328";

            // Formatear mensaje con emojis
            const whatsappMessage = encodeURIComponent(
                `*NUEVA SOLICITUD DE EVENTO* 🍸✨\n\n` +
                `👤 *Nombre:* ${name}\n` +
                `🥂 *Evento:* ${eventType}\n` +
                `📅 *Fecha:* ${date}\n` +
                `📝 *Mensaje:* ${message}\n\n` +
                `_Enviado desde RodrigoVargasBartender.com_ 🚀`
            );

            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;
            
            // Abrir WhatsApp en una nueva pestaña
            window.open(whatsappUrl, '_blank');
            
            // Feedback visual en el botón
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '¡Solicitud Abierta en WhatsApp!';
            submitBtn.style.background = '#25d366';
            form.reset();

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = ''; // Volver al gradient de CSS
            }, 5000);
        });
    }

    // ScrollReveal Animations
    const sr = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 1500,
        delay: 100,
        reset: false
    });

    sr.reveal('.hero-content');
    sr.reveal('.service-card', { interval: 100, origin: 'bottom' });
    sr.reveal('.experience-img', { origin: 'left' });
    sr.reveal('.experience-text', { origin: 'right' });
    sr.reveal('.gallery-item', { interval: 50, scale: 0.9 });
    sr.reveal('.stat-item', { interval: 80 });
    sr.reveal('.test-card', { origin: 'bottom' });
    sr.reveal('.contact-info', { origin: 'left' });
    sr.reveal('.contact-form', { origin: 'right' });
});

