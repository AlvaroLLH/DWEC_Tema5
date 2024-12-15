"use strict";

    /*
    Lee el mensaje guardado en el ejercicio anterior desde la cookie y muéstralo al cargar
    la página

    - Al cargar la página, verifica si la cookie existe
    - Si existe, muestra el contenido de la cookie en el contenedor de mensajes
    */

    // Al cargar la página mostramos el mensaje guardado en la cookie
    window.addEventListener("load", () => {
        const ultimoMensaje = leerCookie("ultimoMensaje"); // Leer la cookie
        if(ultimoMensaje) {
            despliegaMensaje(ultimoMensaje, new Date().toISOString());
        }
    });