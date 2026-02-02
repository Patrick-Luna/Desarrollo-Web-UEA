// 1. Botón de Alerta Personalizada
document.getElementById('btnAlerta').addEventListener('click', function() {
    alert('🥖 ¡Oferta Especial! En compras mayores a $50, reclama tu Pan de Pascua gratis. 🎁');
});

// 2. Validación Dinámica del Formulario
const form = document.getElementById('formContacto');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("❌ Todos los campos son obligatorios. Por favor, revisa la información.");
    } else if (!email.includes("@")) {
        alert("❌ Por favor, ingresa un correo electrónico válido.");
    } else {
        // Mostrar mensaje de éxito
        document.getElementById('mensajeExito').classList.remove('d-none');
        form.reset(); // Limpiar formulario
        setTimeout(() => {
            document.getElementById('mensajeExito').classList.add('d-none');
        }, 4000);
    }
});