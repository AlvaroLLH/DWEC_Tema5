"use strict";

    /*
    Agrega una funcionalidad que elimine automáticamente los mensajes que tienen más de 24 horas.

    - Al cargar los mensajes desde localStorage, elimina aquellos cuyo timestamp sea anterior a 24 horas.
    */

    function limpiarMensajesExpirados() {
        const mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
        const ahora = new Date();

        const mensajesValidos = mensajes.filter(mensaje => {
            const diferencia = ahora - new Date(mensaje.timestamp);
            return diferencia <= 24 * 60 * 60 * 1000;
        });

        localStorage.setItem("mensajes", JSON.stringify(mensajesValidos));
    }

    // Limpiamos mensajes al cargar la página
    window.addEventListener("load", limpiarMensajesExpirados);