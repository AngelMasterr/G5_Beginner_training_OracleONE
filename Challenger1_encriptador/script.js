var caja_texto1 = document.querySelector('.caja_texto1');
var boton_encriptar = document.querySelector('.boton_encriptar');
var boton_desencriptar = document.querySelector('.boton_desencriptar');
var boton_limpiar = document.querySelector('.boton_limpiar');
var boton_copiar = document.querySelector('.boton_copiar');
var img_hacker1 = document.getElementById('img_hacker1');

function encriptar() {
    let texto = caja_texto1.value;
    let texto_encriptado = '';

    for (let i of texto) {
        if (i == 'a') {
            texto_encriptado += 'ai';
        } else if (i == 'e') {
            texto_encriptado += 'enter';
        } else if (i == 'i') {
            texto_encriptado += 'imes';
        } else if (i == 'o') {
            texto_encriptado += 'over';
        } else if (i == 'u') {
            texto_encriptado += 'ufat';
        } else {
            texto_encriptado += i;
        }
    }
    console.log(texto_encriptado);
    return texto_encriptado;
}

function desencriptar() {
    let texto = caja_texto1.value;
    let texto_desencriptado = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a') {
            texto_desencriptado += 'a';
            i += 1;
        } else if (texto[i] == 'e') {
            texto_desencriptado += 'e';
            i += 4;
        } else if (texto[i] == 'i') {
            texto_desencriptado += 'i';
            i += 3;
        } else if (texto[i] == 'o') {
            texto_desencriptado += 'o';
            i += 3;
        } else if (texto[i] == 'u') {
            texto_desencriptado += 'u';
            i += 3;
        } else {
            texto_desencriptado += texto[i];
        }
    }
    console.log(texto_desencriptado);
    return texto_desencriptado;
}

boton_encriptar.addEventListener('click', encriptar);
boton_desencriptar.addEventListener('click', desencriptar);
