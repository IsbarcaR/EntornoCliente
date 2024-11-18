// Ejercicio 22: Árbol DOM Dinámico
let nodoSeleccionado = null;

function agregarNodoArbol() {
    const nodo = document.createElement("div");
    nodo.className = "tree-node";
    nodo.textContent = `Nodo ${Math.random().toString(36).substr(2, 5)}`;
    nodo.onclick = function (event) {
        event.stopPropagation();
        if (nodoSeleccionado) {
            nodoSeleccionado.classList.remove("selected");
        }
        nodoSeleccionado = nodo;
        nodo.classList.add("selected");
    };

    const destino = nodoSeleccionado || document.getElementById("treeRoot");
    destino.appendChild(nodo);
}

function eliminarNodoSeleccionado() {
    if (nodoSeleccionado) {
        nodoSeleccionado.remove();
        nodoSeleccionado = null;
    }
}

// Ejercicio 23: Drag and Drop
const draggable = document.getElementById("draggable");
let offsetX, offsetY;

draggable.addEventListener("mousedown", (e) => {
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    document.addEventListener("mousemove", moverElemento);
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", moverElemento);
    });
});

function moverElemento(event) {
    draggable.style.left = `${event.pageX - offsetX}px`;
    draggable.style.top = `${event.pageY - offsetY}px`;
}

// Ejercicio 24: Validación de Formulario
document.getElementById("validationForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    const nombreError = document.getElementById("nombreError");
    const emailError = document.getElementById("emailError");
    const telefonoError = document.getElementById("telefonoError");

    let valido = true;

    if (nombre.length < 3) {
        nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
        valido = false;
    } else {
        nombreError.textContent = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "El email no es válido.";
        valido = false;
    } else {
        emailError.textContent = "";
    }

    if (!/^\d{9}$/.test(telefono)) {
        telefonoError.textContent = "El teléfono debe tener 9 dígitos.";
        valido = false;
    } else {
        telefonoError.textContent = "";
    }

    if (valido) {
        alert("Formulario enviado correctamente!");
    }
});

// Ejercicio 25: Observador de Mutaciones
const observedElement = document.getElementById("observedElement");
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.log(mutation);
    });
});

observer.observe(observedElement, { attributes: true, childList: true, subtree: true });

function modificarElementoObservado() {
    observedElement.textContent += " Modificado!";
}

// Ejercicio 26: Delegación de Eventos
document.getElementById("buttonContainer").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        alert(`ID del botón: ${e.target.id}`);
    }
});

let botonID = 1;
function agregarBotonDinamico() {
    const nuevoBoton = document.createElement("button");
    nuevoBoton.id = `boton${botonID}`;
    nuevoBoton.textContent = `Botón ${botonID}`;
    document.getElementById("buttonContainer").appendChild(nuevoBoton);
    botonID++;
}
