window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const anchElements = document.querySelectorAll('.anch');
    const lineElements = document.querySelectorAll('.nav_line');
    const brand = document.querySelector('.navbar-brand');
    const aboutSection = document.getElementById('about');
    const scrollThreshold = aboutSection.offsetTop; 

    if (window.scrollY >= scrollThreshold) {
        navbar.classList.add('scrolled');
        navbar.classList.add('navbar-background'); 
        anchElements.forEach(anch => {
            anch.classList.add('scrolledAnchor');
            anch.style.color = '#1C1C1C'; 
        });
        lineElements.forEach(nav_line => nav_line.classList.add('scrolledLine'));
        brand.style.color = '#1C1C1C'; 
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('navbar-background'); 
        anchElements.forEach(anch => {
            anch.classList.remove('scrolledAnchor');
            anch.style.color = '';
        });
        lineElements.forEach(nav_line => nav_line.classList.remove('scrolledLine'));
        brand.style.color = ''; 
    }
});



window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('.nav-link'); 
    
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSectionId = section.getAttribute('id'); 
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); 
        if (link.getAttribute('href').slice(1) === currentSectionId) {
            link.classList.add('active'); 
        }
    });
});
