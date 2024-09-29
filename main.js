//toggle background active
const slideNavigator = name => {
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
        if (slide.classList.contains(name)) {
            slide.classList.add('active');
        }
    });
};

// switch background
window.addEventListener('load', () => {
    const slideBtnList = document.querySelectorAll('.slide-btn');
    slideBtnList.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            slideBtnList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            slideNavigator(this.getAttribute('data-target'));
        });
    });
})


//Active sections

const sectionNavigator = name => {
    let sections = document.querySelectorAll('section');
    let header = document.querySelector('header');
    sections.forEach(section => {
    section.classList.remove('section-show');
    if (section.classList.contains(name)) {
        section.classList.add('section-show');
        header.classList.add('active');
    }
    });
};

//Navigation to the sections

window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(nav => {
        nav.addEventListener('click', function(e) {
            e.preventDefault();
            navList.forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
})

//Reset the Header to the default value
const resetHeader = () => {
    let header = document.querySelector('header');
    header.classList.remove('active');
}

// Initial Navigation

const initNavigation = () => {
    const navList = document.querySelectorAll('nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'about'){
            el.classList.add('active');
        }
    });
    sectionNavigator('about');
};

const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    const openIcon = menu.querySelector('.open');
    const closeIcon = menu.querySelector('.close');

    // Alternar la visibilidad de la navegación móvil
    navMobile.classList.toggle('active');

    // Cambiar la visibilidad de los iconos
    if (navMobile.classList.contains('active')) {
        openIcon.style.display = 'none';  // Oculta el icono de abrir
        closeIcon.style.display = 'block'; // Muestra el icono de cerrar

        // Ocultar la sección share al abrir el menú
        document.querySelector('.share').style.display = 'none';
    } else {
        openIcon.style.display = 'block';  // Muestra el icono de abrir
        closeIcon.style.display = 'none';   // Oculta el icono de cerrar
        
        // Mostrar la sección share al cerrar el menú
        document.querySelector('.share').style.display = 'flex';
    }
};


// Al cargar la página, asegúrate de que el icono de cerrar esté oculto
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const openIcon = menu.querySelector('.open');
    const closeIcon = menu.querySelector('.close');

    closeIcon.style.display = 'none'; // Asegúrate de que el icono de cerrar esté oculto al inicio
});

// Cerrar el menú móvil al seleccionar una opción
const navMobileItems = document.querySelectorAll('.nav-mobile .nav-btn');

navMobileItems.forEach(item => {
    item.addEventListener('click', () => {
        // Cerrar el menú móvil
        const navMobile = document.querySelector('.nav-mobile');
        navMobile.classList.remove('active');

        // Volver a mostrar el icono de abrir y ocultar el de cerrar
        const openIcon = document.querySelector('.menu .open');
        const closeIcon = document.querySelector('.menu .close');
        openIcon.style.display = 'block';  // Muestra el icono de abrir
        closeIcon.style.display = 'none';   // Oculta el icono de cerrar
    });
});

// LightBox para las fotos
let slideIndex = 1;

function openLightBox() {
    document.getElementById("lightbox").style.display = "block";
    document.querySelector('.share').style.display = "none"; // Oculta la sección share
    showSlides(slideIndex); // Muestra la primera imagen al abrir
}

// Cierra la lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.querySelector('.share').style.display = "flex"; // Muestra nuevamente la sección share
}

// Muestra la imagen correspondiente al índice
function currentSlide(n) {
    slideIndex = n; // Actualiza el índice de la imagen actual
    showSlides(slideIndex);
}

// Cambia al siguiente o anterior slide
function plusSlides(n) {
    slideIndex += n; // Cambia el índice
    showSlides(slideIndex);
}

// Muestra el slide actual
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todas las imágenes
    }
    slides[slideIndex - 1].style.display = "block"; // Muestra la imagen actual
}

// Cierra la lightbox al hacer clic en el fondo
document.getElementById('lightbox').addEventListener('click', function(event) {
    // Verifica si se hizo clic en el contenedor de la lightbox
    if (event.target === this) {
        closeLightbox();
    }
});



/*
// Toggle Menu Responsive

const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile')
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
};

// Al cargar la página, oculta el icono de cerrar si el menú no está activo
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const openIcon = menu.querySelector('.open');
    const closeIcon = menu.querySelector('.close');

    closeIcon.style.display = 'none'; // Asegúrate de que el icono de cerrar esté oculto al inicio
});
*/

// Para el cronometro
var countDownDate = new Date("nov 30, 2024 21:45:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);


/// Para que el Footer solo se muestre en las secciones
window.addEventListener('scroll', function() {
    const about = document.getElementById('about');
    const album = document.getElementById('album');
    const footer = document.querySelector('.mini-footer');
    
    const aboutBottom = about.getBoundingClientRect().bottom + window.scrollY;
    const albumBottom = album.getBoundingClientRect().bottom + window.scrollY;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    // Verifica si el usuario ha llegado al final de la sección "about" o "album"
    if (scrollPosition >= aboutBottom || scrollPosition >= albumBottom) {
      footer.style.display = 'block'; // Muestra el footer
    } else {
      footer.style.display = 'none';  // Oculta el footer
    }
  });
  