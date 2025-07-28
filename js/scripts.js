document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pqrsForm');
    const errorModal = document.getElementById('errorModal');
    const errorMessage = document.getElementById('errorMessage');
    const closeModalBtn = document.querySelector('.close-btn');

    // Función para mostrar modal de error
    function showErrorModal(message) {
        errorMessage.textContent = message;
        errorModal.style.display = 'block';
    }

    // Cerrar modal
    closeModalBtn.onclick = function() {
        errorModal.style.display = 'none';
    }

    // Cerrar modal si se hace clic fuera
    window.onclick = function(event) {
        if (event.target == errorModal) {
            errorModal.style.display = 'none';
        }
    }

    // Validación de formulario antes del envío
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validaciones de campos
        const nombreUsuario = document.getElementById('nombreUsuario');
        const identificacion = document.getElementById('identificacion');
        const celular = document.getElementById('celular');
        const correoElectronico = document.getElementById('correoElectronico');
        const mensaje = document.getElementById('mensaje');
        const terminos = document.getElementById('terminos');

        // Expresiones regulares para validación
        const nombreRegex = /^[A-Za-zÁ-ÿ\s]+$/;
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validaciones
        if (!nombreRegex.test(nombreUsuario.value)) {
            showErrorModal('El nombre solo debe contener letras');
            return;
        }

        if (identificacion.value.length < 6 || !/^\d+$/.test(identificacion.value)) {
            showErrorModal('Número de identificación inválido');
            return;
        }

        if (celular.value.length !== 10 || !/^\d+$/.test(celular.value)) {
            showErrorModal('Número de celular debe tener 10 dígitos');
            return;
        }

        if (!correoRegex.test(correoElectronico.value)) {
            showErrorModal('Correo electrónico inválido');
            return;
        }

        if (mensaje.value.trim().length < 20) {
            showErrorModal('El mensaje debe tener al menos 20 caracteres');
            return;
        }

        if (!terminos.checked) {
            showErrorModal('Debe aceptar los términos y condiciones');
            return;
        }

        // Datos del formulario
        const formData = {
            fecha: document.getElementById('fecha').value,
            tipoDocumento: document.getElementById('tipoDocumento').value,
            identificacion: identificacion.value,
            nombreUsuario: nombreUsuario.value,
            celular: celular.value,
            direccion: document.getElementById('direccion').value,
            correoElectronico: correoElectronico.value,
            tipoSolicitud: document.getElementById('tipoSolicitud').value,
            mensaje: mensaje.value
        };

        // Simulación de envío de formulario (sustituir con API real)
        console.log('Datos del formulario:', formData);
        alert('Formulario enviado exitosamente');
        form.reset();
    });
});