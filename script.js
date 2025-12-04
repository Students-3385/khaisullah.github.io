// This function opens/closes the menu on mobile
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

// Smooth scroll when clicking navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        // Close mobile menu after clicking a link
        document.querySelector('nav ul').classList.remove('show');
    });
});

// Highlight the current section in the navigation bar while scrolling
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(sec => {
        const top = sec.offsetTop - 100;
        if (pageYOffset >= top) {
            current = sec.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(a => {
        a.style.fontWeight = 'normal';
        if (a.getAttribute('href') === `#${current}`) {
            a.style.fontWeight = 'bold';
        }
    });
});