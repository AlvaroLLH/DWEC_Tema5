"use strict";

    /*
    Añade un límite de 5 mensajes en el localStorage.

    - Modifica la función guardarMensajes para eliminar el mensaje más antiguo si hay más de 5 mensajes almacenados.
    */

    // Guardamos mensajes con un límite de 5
    function guardarMensajeConLimite(texto) {
        const mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
        const timestamp = new Date().toISOString();
        mensajes.push({ texto, timestamp });

        if(mensajes.length > 5) {
            mensajes.shift();
        }

        localStorage.setItem("mensajes", JSON.stringify(mensajes));
    }

    // Modificamos el evento para usar la función
    botonEnviar.addEventListener("click", () => {
        const textoMensaje = inputMensaje.value.trim();
        if(textoMensaje !== "") {
            guardarMensajeConLimite(textoMensaje);
            despliegaMensaje(textoMensaje, new Date().toISOString());
            inputMensaje.value = "";
        }
    });