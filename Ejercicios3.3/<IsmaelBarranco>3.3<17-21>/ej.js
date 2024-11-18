// Ejercicio 17: Cambiar Texto
function cambiarTexto() {
    const texto = document.getElementById("text1");
    texto.textContent = "Texto modificado mediante JavaScript!";
}

// Ejercicio 18: Cambiar Estilo
function cambiarEstilo() {
    const texto = document.getElementById("text2");
    texto.style.color = "red";
    texto.style.fontSize = "20px";
    texto.style.fontWeight = "bold";
}

// Ejercicio 19: Control de Visibilidad
function toggleVisibilidad() {
    const texto = document.getElementById("text3");
    texto.classList.toggle("hidden");
}

// Ejercicio 20: Lista Dinámica
let contador = 1;
function agregarElemento() {
    const lista = document.getElementById("lista");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = `Elemento ${contador}`;
    lista.appendChild(nuevoElemento);
    contador++;
}

// Ejercicio 21: Eventos del Ratón
document.getElementById("mouseArea").onmousemove = function (event) {
    document.getElementById("coordenadas").textContent =
        `X: ${event.offsetX}, Y: ${event.offsetY}`;
};

