/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Alert } from "bootstrap";

let tarjeta = document.getElementById("tarjeta");
let cvc = document.getElementById("cvc");
let amount = document.querySelector("#amount");
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let ciudad = document.querySelector("#ciudad");
let pais = document.querySelector("#pais");
let codigo = document.querySelector("#codigo");
let visa = document.querySelector("#visa");
let masterCard = document.querySelector("#masterCard");
let dinners = document.querySelector("#dinners");
let amex = document.querySelector("#amex");
let recuadro = document.querySelector("#recuadroTarjetas");
let mensajeHtml = document.querySelector("#mensajeHtml");
let enviar = document.querySelector("#enviar");
let borrar = document.querySelector("#borrar");
let mensaje = "";

enviar.addEventListener("click", comprobar);
borrar.addEventListener("click", borrarTodo);
function comprobar() {
  comprobarTarjeta();
  comprobarCvc();
  console.log();
  comprobarAmount();
  comprobarNombre();
  comprobarApellido();
  comprobarCiudad();
  comprobarPais();
  comprobarCodigo();
  enviadoCorrectamente();
  imprimirMensaje();
  console.log(mensajeHtml);
  mensaje = "";
}
function comprobarTarjeta() {
  if (isNaN(tarjeta.value) == true || tarjeta.value == "") {
    mensaje += "- Numero de tarjeta incorrecto<br>";
    tarjeta.className += " error";
  } else if (tarjeta.value.length != 16) {
    mensaje += "- Cantidad de numeros incorrecta en Numero de Tarjeta <br>";
    tarjeta.className += " error";
  } else {
    tarjeta.className = "form-control";
  }
}
function comprobarCvc() {
  if (visa.checked == true) {
    if (isNaN(cvc.value) == true || cvc.value == "") {
      mensaje += "- Numero de CVC incorrecto<br>";
      cvc.className += " error";
    } else if (cvc.value.length != 3) {
      mensaje += "- CVC incorrecto para este tipo de tarjeta <br>";
      cvc.className += " error";
    } else {
      recuadro.className = "tarjetas border bg-light";
      cvc.className = "form-control";
    }
  } else if (masterCard.checked == true) {
    if (isNaN(cvc.value) == true || cvc.value == "") {
      mensaje += "- Numero de CVC incorrecto<br>";
      cvc.className += " error";
    } else if (cvc.value.length != 3) {
      mensaje += "- CVC incorrecto para este tipo de tarjeta <br>";
      cvc.className += " error";
    } else {
      recuadro.className = "tarjetas border bg-light";
      cvc.className = "form-control";
    }
  } else if (dinners.checked == true) {
    if (isNaN(cvc.value) == true || cvc.value == "") {
      mensaje += "- Numero de CVC incorrecto<br>";
      cvc.className += " error";
    } else if (cvc.value.length != 3) {
      mensaje += "- CVC incorrecto para este tipo de tarjeta <br>";
      cvc.className += " error";
    } else {
      recuadro.className = "tarjetas border bg-light";
      cvc.className = "form-control";
    }
  } else if (amex.checked == true) {
    if (isNaN(cvc.value) == true || cvc.value == "") {
      mensaje += "- Numero de CVC incorrecto<br>";
      cvc.className += " error";
    } else if (cvc.value.length != 4) {
      mensaje += "- CVC incorrecto para este tipo de tarjeta <br>";
      cvc.className += " error";
    } else {
      recuadro.className = "tarjetas border bg-light";
      cvc.className = "form-control";
    }
  } else {
    mensaje += "- Por Favor Seleccione un tipo de tarjeta<br>";
    recuadro.className = " error";
  }
}
function comprobarAmount() {
  if (amount.value <= 0) {
    mensaje += "- El importe es incorrecto<br>";
    amount.className += " error";
  } else {
    amount.className = "form-control";
  }
}
function comprobarNombre() {
  if (nombre.value == "") {
    mensaje += "- Por Favor Rellene el Nombre<br>";
    nombre.className += " error";
  } else {
    nombre.className = "form-control";
  }
}
function comprobarApellido() {
  if (apellido.value == "") {
    mensaje += "- Por Favor Rellene el Apellido<br>";
    apellido.className += " error";
  } else {
    apellido.className = "form-control";
  }
}
function comprobarCiudad() {
  if (ciudad.value == "") {
    mensaje += "- Por Favor Rellene la Ciudad<br>";
    ciudad.className += " error";
  } else {
    ciudad.className = "form-control";
  }
}
function comprobarPais() {
  if (pais.value == "Elegir") {
    mensaje += "- Por Favor Seleccione un Pais<br>";
    pais.className += " error";
  } else {
    pais.className = "form-control";
  }
}
function comprobarCodigo() {
  if (isNaN(codigo.value) == true || codigo.value == "") {
    mensaje += "- Por favor inserte un codigo postal correcto<br>";
    codigo.className += " error";
  } else {
    codigo.className = "form-control";
  }
}
function enviadoCorrectamente() {
  if (mensaje == "") {
    mensaje = "Formulario enviado Correctamente";
  }
}

function imprimirMensaje() {
  mensajeHtml.innerHTML = mensaje;
  if (mensaje === "Formulario enviado Correctamente") {
    mensajeHtml.className = "form-control verde";
  } else {
    mensajeHtml.className = "form-control rojo";
  }
}
function borrarTodo() {
  tarjeta.value = "";
  tarjeta.className = "form-control";
  cvc.value = "";
  cvc.className = "form-control";
  amount.value = "";
  amount.className = "form-control";
  nombre.value = "";
  nombre.className = "form-control";
  apellido.value = "";
  apellido.className = "form-control";
  ciudad.value = "";
  ciudad.className = "form-control";
  pais.value = "Elegir";
  pais.className = "form-control";
  codigo.value = "";
  codigo.className = "form-control";
  recuadro.className = "form-control";
  mensajeHtml.innerHTML = "";
  mensajeHtml.className = "form-control";
}
