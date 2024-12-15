"use strict";

    /*
    Permite al usuario importar mensajes desde un archivo JSON.

    - Agrega un botón "Importar".
    - Permite al usuario cargar un archivo .json con una lista de mensajes, y guárdalos en localStorage.
    */

    function importarMensajes(event) {
        const archivo = event.target.files[0];
        if(!archivo) return;

        const lector = new FileReader();
        lector.onload = function (e) {
            const mensajesImportados = JSON.parse(e.target.result);
            localStorage.setItem("mensajes", JSON.stringify(mensajesImportados));
            cargarMensajes();
        };

        lector.readAsText(archivo);
    }

    // Evento para cargar un archivo JSON
    const inputImportar = document.getElementById("input-importar");
    inputImportar.addEventListener("change", importarMensajes);