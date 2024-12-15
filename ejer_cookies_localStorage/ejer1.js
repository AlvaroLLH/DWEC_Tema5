"use strict";

    /*
    Crea una función que lea una cookie específica y muéstrala en la consola.

    - Escribe una función leerCookie(nombre) que busque y devuelva el valor de una cookie
    específica.
    - Usa document.cookie
    */

    // Función para leer una cookie específica
    function leerCookie(nombre) {

        // Buscamos la cookie
        const cookies = document.cookie.split("; ");

        for(const cookie of cookies) {
            const [clave, valor] = cookie.split("=");
            if(clave === nombre) return valor;
        }
        return null;
    }

    // Ejemplo
    console.log("Valor de la cookie 'ultimoMensaje':", leerCookie("ultimoMensaje"));