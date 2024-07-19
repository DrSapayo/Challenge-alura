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