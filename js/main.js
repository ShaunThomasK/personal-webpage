const savedTheme = localStorage.getItem('theme');
if (savedTheme) 
{
    document.documentElement.setAttribute('data-theme', savedTheme);
}

const toggleBtn = document.getElementById('theme');
toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

const typedEl = document.getElementById('typed');
if (typedEl) {
    const typer = new Typewriter(typedEl, {
        strings: ['CS Student 💻', 'Pianist 🎹', 'Baker 🎂', 'Chemist 🧪'],
        typingSpeed: 100,
        eraseSpeed: 50,
        pauseDuration: 1500
    });
    typer.start();
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) 
        {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));