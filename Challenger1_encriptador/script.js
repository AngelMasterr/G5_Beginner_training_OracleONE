// Obtener todos los elementos html
const caja_texto1 = document.querySelector('.caja_texto1');
const texto_resultado = document.querySelector('.texto_resultado');
const boton_encriptar = document.querySelector('.boton_encriptar');
const boton_desencriptar = document.querySelector('.boton_desencriptar');
const boton_limpiar = document.querySelector('.boton_limpiar');
const boton_copiar = document.querySelector('.boton_copiar');
let img_hacker1 = document.getElementById('img_hacker1');

// Crear las funciones
function encriptar() {
    let texto = String(caja_texto1.value);
    let texto_encriptado = '';

    let obj_letters = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'over',
        u: 'ufat',
    };
    texto_encriptado = texto.replace(/a|e|i|o|u/g, function (letters) {
        return obj_letters[letters];
    });
    console.log(texto_encriptado);
    texto_resultado.value = 'coadass';
}

function desencriptar() {
    let texto = String(caja_texto1.value);
    let texto_encriptado = '';

    let obj_letters = {
        ai: 'a',
        enter: 'e',
        imes: 'i',
        over: 'o',
        ufat: 'u',
    };
    texto_encriptado = texto.replace(/ai|enter|imes|over|ufat/g, function (letters) {
        return obj_letters[letters];
    });
    console.log(texto_encriptado);
    texto_resultado.value = texto_encriptado;
}

function copiar_palabra_encriptada() {
    texto_resultado.textContent;
    navigator.clipboard.writeText(texto_resultado);
}

function limpiar_caja_texto() {
    caja_texto1.value = '';
}

boton_encriptar.addEventListener('click', encriptar);
boton_desencriptar.addEventListener('click', desencriptar);
boton_copiar.addEventListener('click', copiar_palabra_encriptada);
boton_limpiar.addEventListener('click', limpiar_caja_texto);
