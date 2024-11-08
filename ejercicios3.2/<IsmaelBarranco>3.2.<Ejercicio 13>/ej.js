const duplicateButton = document.getElementById("duplicateButton");
const inputText = document.getElementById("inputText");
const textDisplay = document.getElementById("textDisplay");

duplicateButton.addEventListener("click", function() {

    const texto = inputText.value;
    const textoDuplicado = texto ;

    textDisplay.textContent = textoDuplicado;
});