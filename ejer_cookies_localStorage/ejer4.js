"use strict";

    /*
    Cambia la aplicación para que use sessionStorage en lugar de localStorage

    - Modifica las funciones guardarMensajes y cargarMensajes para que utilicen sessionStorage.
    - Observa cómo los mensajes se pierden al cerrar la pestaña pero no al recargar la página.
    */

    function guardarMensajeSession(texto) {
        const mensajes = JSON.parse(sessionStorage.getItem("mensajes")) || [];
        const timestamp = new Date().toISOString();
        mensajes.push({ texto, timestamp });
        sessionStorage.setItem("mensajes", JSON.stringify(mensajes));
    }

    // Cargamos mensajes desde sessionStorage
    function cargarMensajesSession() {
        const mensajesGuardados = JSON.parse(sessionStorage.getItem("mensajes")) || [];
        mensajesGuardados.forEach(mensaje => despliegaMensaje(mensaje.texto, mensaje.timestamp));
    }

    // Cambiamos los eventos para usar sessionStorage
    botonEnviar.addEventListener("click", () => {
        const textoMensaje = inputMensaje.value.trim();
        if(textoMensaje !== "") {
            guardarMensajeSession(textoMensaje);
            despliegaMensaje(textoMensaje, new Date().toISOString());
            inputMensaje.value = "";
        }
    });

    // Cargamos mensajes al inicio
    window.addEventListener("load", cargarMensajesSession);