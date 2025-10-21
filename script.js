// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Fake form submit (alerts for now—upgrades to email later)
document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! Message sent—we\'ll hit you up soon. (Real email setup next?)');
    e.target.reset();
});

// Mobile nav toggle if needed (bonus)