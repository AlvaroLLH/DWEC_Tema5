"use strict";

    /*
    Modifica el comportamiento de tu aplicación para guardar el último mensaje enviado
    en una cookie.

    - Escribe una función guardarCookie(nombre, valor, dias) que cree una cookie con nombre,
    valor y un tiempo de expiración
    - Guarda el texto del último mensaje enviado como una cookie con un tiempo de expiración
    de 7 días
    */

    function guardarCookie(nombre, valor, dias) {
        const fecha = new Date();
        fecha.setDate(fecha.getDate() + dias);
        document.cookie = `${nombre}=${valor}; expires=${fecha.toUTCString()}; path=/`;
    }

    // Guardamos el texto
    botonEnviar.addEventListener("click", () => {
        const textoMensaje = inputMensaje.value.trim();
        
        if(textoMensaje !== "") {
            guardarCookie("ultimoMensaje", textoMensaje, 7); // Guardamos la cookie por 7 días
        }
    });