// Mobile menu toggle
document.querySelector('.mobile-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Función para comprobar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Función para animar elementos al hacer scroll
    function animateOnScroll() {
        // Servicios
        document.querySelectorAll('.service-card').forEach((card, index) => {
            if (isInViewport(card) && !card.classList.contains('animated')) {
                card.style.animation = `fadeIn 0.6s forwards ${index * 0.2}s`;
                card.classList.add('animated');
            }
        });

        // Acerca de
        const aboutContent = document.querySelector('.about-content');
        const aboutImage = document.querySelector('.about-image');
        if (isInViewport(aboutContent) && !aboutContent.classList.contains('animated')) {
            aboutContent.style.animation = 'fadeInLeft 0.8s forwards';
            aboutContent.classList.add('animated');
        }
        if (isInViewport(aboutImage) && !aboutImage.classList.contains('animated')) {
            aboutImage.style.animation = 'fadeInRight 0.8s forwards 0.2s';
            aboutImage.classList.add('animated');
        }

        // Portfolio
        document.querySelectorAll('.portfolio-item').forEach((item, index) => {
            if (isInViewport(item) && !item.classList.contains('animated')) {
                item.style.animation = `scaleIn 0.6s forwards ${index * 0.2}s`;
                item.classList.add('animated');
            }
        });
    }

    // Llamar a la función al cargar la página
    animateOnScroll();

    // Llamar a la función al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Cerrar menú móvil si está abierto
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});