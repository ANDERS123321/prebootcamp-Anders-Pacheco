document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("nombre");
    const boton = document.getElementById("saludo");
    const contenedor = document.getElementById("resultado");

    boton.addEventListener("click", () => {
        const nombre = input.value.trim();
        if (nombre) {
            contenedor.textContent = `Hola, ${nombre}`;
        } else {
            contenedor.textContent = "Por favor, escribe tu nombre.";
        }
    });
});
