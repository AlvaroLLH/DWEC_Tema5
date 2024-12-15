"use strict";

    /*
    Crea un botón que permita al usuario borrar todas las cookies.

    - Escribe una función borrarTodasLasCookies() que elimine todas las cookies configuradas por la aplicación.
    - Usa el botón para ejecutarla.
    */

    function borrarTodasLasCookies() {
        const cookies = document.cookie.split("; ");
        for(const cookie of cookies) {
            const nombre = cookie.split("=")[0];
            document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        }
        console.log("Todas las cookies han sido borradas");
    }

    // Evento para ejecutar la función al hacer clic en un botón
    const botonBorrarCookies = document.getElementById("boton-borrar-cookies");
    botonBorrarCookies.addEventListener("click", borrarTodasLasCookies);