"use strict";

// Obtenemos referencias a los elementos del DOM
const inputMensaje = document.getElementById("input-mensaje"); // El campo de texto del mensaje
const botonEnviar = document.getElementById("boton-enviar"); // El botón para enviar el mensaje
const contenedorMensajes = document.getElementById("mensajes"); // Contenedor donde se muestran

// Función para cargar los mensajes guardados en localStorage
function cargarMensajes() {
    
    // Obtenemos los mensajes del localStorage (si existen)
    const mensajesGuardados = JSON.parse(localStorage.getItem("mensajes")) || [];

    // Mostramos cada mensaje cargado en el contenedor
    mensajesGuardados.forEach(mensaje => {
        displayMessage(mensaje.texto, mensaje.timestamp);
    });
}

// Función para mostrar un mensaje en el contenedor
function despliegaMensaje(texto, timestamp) {
    
    // Crear un nuevo div para el mensaje
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("mensaje"); // Añadimos la clase CSS "mensaje"

    // Insertamos el contenido HTML del mensaje (texto y timestamp)
    mensajeDiv.innerHTML = `
        ${texto} <!-- El texto del mensaje -->
        <div class="timestamp">${new Date(timestamp).toLocaleString()}</div> <!-- La fecha y hora del mensaje -->
        `;

    // Agregamos el mensaje al contenedor de mensajes
    contenedorMensajes.appendChild(mensajeDiv);

    // Desplazamos automáticamente el contenedor al final para ver el último mensaje
    contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;

}

// Función para guardar un nuevo mensaje en localStorage
function guardaMensaje(texto) {
    
    // Obtenemos los mensajes guardados previamente (si existen)
    const mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

    // Crear un objeto para el nuevo mensaje con su texto y timestamp
    const timestamp = new Date().toISOString(); // Obtenemos fecha y hora actual en formato ISO
    mensajes.push({ texto, timestamp });

    // Guardamos los mensajes de nuevo en localStorage
    localStorage.setItem("mensajes", JSON.stringify(mensajes));

}

// Evento para manejar el click en el botón de enviar
botonEnviar.addEventListener("click", () => {
    const textoMensaje = inputMensaje.value.trim(); // Obtenemos el texto y quitamos espacios

    if(textoMensaje !== "") { // Si el mensaje no está vacío
        guardaMensaje(textoMensaje); // Guardamos el mensaje
        despliegaMensaje(textoMensaje, new Date().toISOString()); // Mostramos el mensaje en la pantalla
        inputMensaje.value = ""; // Limpiamos el campo de texto
    }
});

// Evento para manejar el envío del mensaje al presionar Enter
inputMensaje.addEventListener("keydown", (event) => {
    if(event.key === "Enter") { // Si la tecla presionada es Enter
        botonEnviar.click(); // Ejecutar la acción del botón "Enviar"
    }
});

// Cuando la página se carga, cargar los mensajes previamente guardados
window.addEventListener("load", cargarMensajes);