document.addEventListener('DOMContentLoaded', function(){

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    // Función para validar el formulario
    function validar(e) {
        if(e.target.value.trim() === ''){
            mostrarAlerta();
        }else{
            console.log('No esta vacío');
        }
    }

    function mostrarAlerta() {
        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = 'Hubo un error...';

        console.log(error);
    }

});