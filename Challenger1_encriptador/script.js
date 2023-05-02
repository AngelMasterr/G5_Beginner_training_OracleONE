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
    texto_resultado.textContent = texto_encriptado;
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
    texto_resultado.textContent = texto_encriptado;
}

function copiar_palabra_encriptada() {
    let copy_text = texto_resultado.textContent;
    if (copy_text.trim() === '') {
        alert('El input está vacío');
    } else {
        navigator.clipboard.writeText(copy_text);
        caja_texto1.select();
        caja_texto1.focus();
        alert('El input tiene contenido');
    }
}

function limpiar_caja_texto() {
    caja_texto1.value = '';
}

// Detectar que solo introduzca letras minusculas y sin acentos
caja_texto1.addEventListener('input', function () {
    let text_input = caja_texto1.value;
    // Convertir a minúsculas y quitar caracteres no permitidos
    text_input = text_input.toLowerCase().replace(/[^a-z\s]/g, '');
    caja_texto1.value = text_input;
});

boton_encriptar.addEventListener('click', encriptar);
boton_desencriptar.addEventListener('click', desencriptar);
boton_copiar.addEventListener('click', copiar_palabra_encriptada);
boton_limpiar.addEventListener('click', limpiar_caja_texto);
