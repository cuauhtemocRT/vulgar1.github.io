window.addEventListener("scroll", () => {
    const nav = document.querySelector(".metal-navbar");
    if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 50);
    }
});

// Seleccionamos todos los botones y modales
const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-btn');

// Abrir modal
openButtons.forEach(btn => {
    btn.onclick = function() {
        // Buscamos el modal que está inmediatamente después del botón
        this.nextElementSibling.style.display = "block";
    }
});

// Cerrar modal con la X
closeButtons.forEach(span => {
    span.onclick = function() {
        this.closest('.modal').style.display = "none";
    }
});

// Cerrar si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}