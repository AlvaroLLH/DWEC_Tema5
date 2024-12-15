"use strict";

    /*
    Permite al usuario exportar todos los mensajes como un archivo JSON.

    - Agrega un botón "Exportar".
    - Al hacer clic, genera un archivo .json con los mensajes guardados en localStorage.
    */

    function exportarMensajes() {
        const mensajes = localStorage.getItem("mensajes") || "[]";
        const blob = new Blob([mensajes], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "mensajes.json";
        a.click();
    }

    // Evento para exportar
    const botonExportar = document.getElementsByTagName("boton-exportar");
    botonExportar.addEventListener("click", exportarMensajes);