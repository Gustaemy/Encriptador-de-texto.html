const imputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

function validarMensaje (){

    //Borrar errores previos
    let erroresPrevios = tarjeta1.querySelectorAll(".error");
    for (let err of erroresPrevios){
        tarjeta1.removeChild(err);
    }
    var mensaje = imputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)){
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent ="La letra $(letra) no es valida";
            mensajeError.appendChild(p);
        }
    }
    tarjeta1.appendChild(mensajeError);
    if (mensajeError.children.length === 0) {
        return true;
    }
    return false;
}

function encriptar (){
    if (!validarMensaje()) return;
    var mensaje = imputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat")

    inputResultado.value = mensajeEncriptado;
}

function desencriptar (){
    var mensajeEncriptado = imputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u")

    inputResultado.value = mensaje;
}

function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    imputMensaje.value = "";
    imputMensaje.focus();
}
 
btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btmCopiar.onclick = copiar;