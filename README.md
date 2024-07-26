# Encriptador de Texto; Challenge de Alura

¡Bienvenido al Encriptador de Texto! Este programa permite encriptar y desencriptar mensajes de texto mediante un sencillo sistema de reemplazo de caracteres. La aplicación está desarrollada utilizando HTML, CSS y JavaScript.

Desarrollado por Julian Castillo.

## Descripción

Este encriptador de texto es una herramienta interactiva que permite transformar un texto dado aplicando reglas específicas de encriptación. Asimismo, la aplicación puede revertir el proceso para recuperar el texto original.

### Reglas de Encriptación

El programa utiliza las siguientes reglas para encriptar texto:

- La letra **"a"** se reemplaza por **"ai"**.
- La letra **"e"** se reemplaza por **"enter"**.
- La letra **"i"** se reemplaza por **"imes"**.
- La letra **"o"** se reemplaza por **"ober"**.
- La letra **"u"** se reemplaza por **"ufat"**.

El proceso de desencriptación simplemente invierte estas reglas, devolviendo el texto original.

### Restricciones

- No se permiten mayúsculas ni caracteres especiales. Solo se aceptan letras minúsculas y espacios.
- En caso de que se introduzca texto inválido, se mostrará un mensaje de error.

## Captura de Pantalla

![Encriptador de Texto](img/encriptador_pantalla.png)

## Tecnologías Utilizadas

- **HTML**: Estructura del contenido.
- **CSS**: Estilizado del diseño de la aplicación.
- **JavaScript**: Lógica de encriptación y desencriptación.

## Cómo Usar

Sigue estos pasos para utilizar la aplicación:

1. **Introducir Texto**: Escribe el texto que deseas encriptar o desencriptar en el campo de entrada.
   
2. **Encriptar**: Haz clic en el botón **"Encriptar"** para transformar el texto según las reglas de encriptación.
   
3. **Desencriptar**: Haz clic en el botón **"Desencriptar"** para revertir el proceso y recuperar el texto original.

4. **Copiar**: Una vez que el texto haya sido encriptado o desencriptado, puedes copiarlo al portapapeles haciendo clic en el botón **"Copiar"**.

## Instalación y Ejecución

Para ejecutar este programa en tu máquina local:

1. Clona este repositorio o descarga los archivos necesarios.

2. Asegúrate de que todos los archivos estén en el mismo directorio:
   - `index.html`
   - `style.css`
   - `app.js`
   - `img/` (directorio de imágenes, incluyendo `lupa.jpeg`)

3. Abre el archivo `index.html` en tu navegador web preferido.

4. ¡Comienza a encriptar y desencriptar texto!

## Código JavaScript

El archivo `app.js` contiene la lógica del programa. A continuación se presenta un resumen de las funciones clave:

```javascript
function iniciales(){
    document.getElementById('div_final').style.display = 'none';
    document.getElementById('div_final_2').style.display = 'none';
    document.getElementById('div_inicial').style.display = 'block';
    document.getElementById('div_final_error').style.display = 'none';
}

function clic(){
    if(document.getElementById('input').value != ""){
        document.getElementById('div_inicial').style.display = 'none';
        document.getElementById('div_final').style.display = 'block';
        document.getElementById('div_final_2').style.display = 'block';
        document.getElementById('div_final_error').style.display = 'block';
        if(validarTexto() == true){
            document.getElementById('caja_copiar').value = ver();
        }
    } else {
        iniciales();
    }
}

function clic2(){
    if (document.getElementById('input').value != ""){
        if(validarTexto() == true){
            document.getElementById('caja_copiar').value = desencriptar();
        }
    }
}

function validarTexto(){
    var texto = document.getElementById('input').value;
    var mensajeError = document.getElementById('error');

    var regex = /[A-Z]|[^a-z0-9\s]|[0-9]/;

    if(regex.test(texto)){
        mensajeError.textContent = "ERROR: MAYUSCULA O CARACTER ESPECIAL DETECTADO";
        document.getElementById('caja_copiar').value = "";
        return false;
    } else {
        mensajeError.textContent = "";
        return true;
    }
}

function ver(){
    var palabra;
    var letra = [];
    var palabra_enc = "";
    palabra = document.getElementById('input').value;

    for (let i = 0; i < palabra.length; i++) {
         letra[i] = palabra[i];
         if(letra[i] == "a"){
            letra[i] = "ai";
         } else if(letra[i] == "e"){
            letra[i] = "enter";
         } else if (letra[i] == "i") {
            letra[i] = "imes";
         } else if (letra[i] == "o") {
            letra[i] = "ober";
         } else if (letra[i] == "u") {
            letra[i] = "ufat";
         }
        palabra_enc += letra[i];
    }
    return palabra_enc;
}

function desencriptar(){
    var textoEncriptado = document.getElementById('input').value;

    var textoDesencriptado = textoEncriptado
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')
    
    return textoDesencriptado;
}

function copiar(){
    var inputElement;
    inputElement = document.getElementById('caja_copiar');

    navigator.clipboard.writeText(inputElement.value)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}
