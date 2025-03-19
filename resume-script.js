// Animate sections on scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    sectionObserver.observe(section);
});

// Animate skill bars
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserverOptions = {
    threshold: 0.5
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.getAttribute('data-progress');
            entry.target.style.width = `${progress}%`;
        }
    });
}, skillObserverOptions);

skillBars.forEach(bar => {
    bar.style.width = '0';
    bar.style.transition = 'width 1.5s ease-out';
    skillObserver.observe(bar);
});

// Smooth scroll for navigation links
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

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add typing effect to the name
const nameElement = document.querySelector('.name');
if (nameElement) {
    const name = nameElement.textContent;
    nameElement.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < name.length) {
            nameElement.textContent += name.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
}

// Add parallax effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        const scrolled = window.pageYOffset;
        header.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// Add active state to navigation links
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}); 