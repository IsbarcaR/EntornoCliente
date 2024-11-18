// Ejercicio 27: Validación Básica de Ficheros
document.getElementById("basicForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("basicFileInput");
    const errorDiv = document.getElementById("basicError");
    const successDiv = document.getElementById("basicSuccess");
    const preview = document.getElementById("imagePreview");

    errorDiv.textContent = "";
    successDiv.textContent = "";
    preview.style.display = "none";

    const file = fileInput.files[0];

    if (!file) {
        errorDiv.textContent = "Por favor, selecciona un archivo.";
        return;
    }

    if (!file.type.startsWith("image/")) {
        errorDiv.textContent = "El archivo debe ser una imagen.";
        return;
    }

    if (file.size > 1 * 1024 * 1024) {
        errorDiv.textContent = "El archivo no debe superar 1MB.";
        return;
    }

    successDiv.textContent = "¡Archivo válido!";
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
});

// Ejercicio 28: Validación Avanzada y Drag & Drop
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("advancedFileInput");
const fileList = document.getElementById("fileList");
const uploadProgress = document.getElementById("uploadProgress");
const advancedError = document.getElementById("advancedError");
const advancedSuccess = document.getElementById("advancedSuccess");

dropZone.addEventListener("click", () => fileInput.click());

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragging");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragging");
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragging");
    validarArchivos(e.dataTransfer.files);
});

fileInput.addEventListener("change", (e) => validarArchivos(e.target.files));

function validarArchivos(files) {
    fileList.innerHTML = "";
    advancedError.textContent = "";
    advancedSuccess.textContent = "";

    let totalSize = 0;
    let validCount = 0;

    Array.from(files).forEach((file) => {
        const li = document.createElement("div");
        li.className = "file-info";
        li.textContent = `${file.name} - ${(file.size / 1024).toFixed(2)} KB`;

        if (!["image/jpeg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
            li.style.color = "red";
            li.textContent += " (Tipo no permitido)";
        } else if (file.size > 5 * 1024 * 1024) {
            li.style.color = "red";
            li.textContent += " (Excede el tamaño permitido)";
        } else {
            li.style.color = "green";
            li.textContent += " (Válido)";
            validCount++;
            totalSize += file.size;
        }

        fileList.appendChild(li);
    });

    if (validCount > 0) {
        advancedSuccess.textContent = `Archivos válidos: ${validCount}, Tamaño total: ${(totalSize / 1024 / 1024).toFixed(2)} MB.`;
    } else {
        advancedError.textContent = "No se encontraron archivos válidos.";
    }
}

function uploadFiles() {
    const validFiles = fileList.querySelectorAll(".file-info[style*='green']");
    if (validFiles.length === 0) {
        advancedError.textContent = "No hay archivos válidos para subir.";
        return;
    }

    advancedError.textContent = "";
    uploadProgress.style.display = "block";

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        uploadProgress.value = progress;

        if (progress >= 100) {
            clearInterval(interval);
            uploadProgress.style.display = "none";
            advancedSuccess.textContent = "¡Archivos subidos correctamente!";
        }
    }, 300);
}
