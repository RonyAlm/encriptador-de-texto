const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const text = document.getElementById("text");
const result = document.querySelector(".result");


btnEncriptar.addEventListener("click", () => {
    if (text.value.length > 0) {
        const textoEncriptado = encriptar(text.value);
        result.innerHTML = `
                    <p class="encriptado">${textoEncriptado}</p>
                    <button class="copy btn" id="copy" onclick="copyText()">Copiar</button>`;
        text.value = "";
        text.focus();
    }
});


btnDesencriptar.addEventListener("click", () => {
    if (text.value.length > 0) {
        const textoEncriptado = desencriptar(text.value);
        result.innerHTML = ` 
                <p class="encriptado">${textoEncriptado}</p>
                <button class="copy btn" id="copy" onclick="copyText()">Copiar</button>`;
        text.value = "";
        text.focus();
    }
});


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copyText() {
    const text = document.querySelector(".result p");
    const rango = document.createRange();
    rango.selectNodeContents(text);
    let seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    navigator.clipboard.writeText(text.textContent);
}
