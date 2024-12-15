"use strict";

    /*
    Agrega una funcionalidad que cuente cuántas veces el usuario ha visitado la página.

    - Usa una cookie para almacenar el número de visitas.
    - Muestra en la consola: "Has visitado esta página X veces".
    */

    function contarVisitas() {
        const visitas = parseInt(leerCookie("visitas") || "0") + 1;
        guardarCookie("visitas", visitas, 30);
        console.log(`Has visitado esta página ${visitas} veces`);
    }

    // Contamos visitas
    window.addEventListener("load", contarVisitas);