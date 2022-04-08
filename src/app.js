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

let enviar = document.querySelector("#enviar");
console.log(enviar);

enviar.addEventListener("click", comprobar);
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
}
function comprobarTarjeta() {
  if (isNaN(tarjeta.value) == true || tarjeta.value == "") {
    //alert("numero de tarjeta incorrecto");
    tarjeta.className += " error";
  } else if (tarjeta.value.length != 16) {
    //alert("cantidad de numeros incorrecta en Numero de Tarjeta");
    tarjeta.className += " error";
  } else {
    tarjeta.className = "form-control";
  }
}
function comprobarCvc() {
  if (visa.checked == true) {
    if (isNaN(cvc.value) == true || cvc.value == "") {
      //alert("numero de CVC incorrecto");
      cvc.className += " error";
    } else if (cvc.value.length != 3) {
      //alert("cantidad de numeros incorrecta en CVC para este tipo de tarjeta");
      cvc.className += " error";
    } else {
      recuadro.className = "tarjetas border bg-light";
      cvc.className = "form-control";
    }
  } else if (masterCard.checked == true) {
    if (isNaN(cvc.value) == true || cvc.value == "") {
      //alert("numero de CVC incorrecto");
      cvc.className += " error";
    } else if (cvc.value.length != 3) {
      //alert("cantidad de numeros incorrecta en CVC para este tipo de tarjeta");
      cvc.className += " error";
    } else {
      recuadro.className = "tarjetas border bg-light";
      cvc.className = "form-control";
    }
  } else if (dinners.checked == true) {
    if (isNaN(cvc.value) == true || cvc.value == "") {
      //alert("numero de CVC incorrecto");
      cvc.className += " error";
    } else if (cvc.value.length != 3) {
      //alert("cantidad de numeros incorrecta en CVC para este tipo de tarjeta");
      cvc.className += " error";
    } else {
      recuadro.className = "tarjetas border bg-light";
      cvc.className = "form-control";
    }
  } else if (amex.checked == true) {
    if (isNaN(cvc.value) == true || cvc.value == "") {
      //alert("numero de CVC incorrecto");
      cvc.className += " error";
    } else if (cvc.value.length != 4) {
      //alert("cantidad de numeros incorrecta en CVC para este tipo de tarjeta");
      cvc.className += " error";
    } else {
      recuadro.className = "tarjetas border bg-light";
      cvc.className = "form-control";
    }
  } else {
    //alert("Por Favor Seleccione un tipo de tarjeta");
    recuadro.className = " error";
  }
}
function comprobarAmount() {
  if (amount.value <= 0) {
    //alert("el importe es incorrecto");
    amount.className += " error";
  } else {
    amount.className = "form-control";
  }
}
function comprobarNombre() {
  if (nombre.value == "") {
    //alert("Por Favor Rellenar Nombre");
    nombre.className += " error";
  } else {
    nombre.className = "form-control";
  }
}
function comprobarApellido() {
  if (apellido.value == "") {
    //alert("Por Favor Rellenar Apellido");
    apellido.className += " error";
  } else {
    apellido.className = "form-control";
  }
}
function comprobarCiudad() {
  if (ciudad.value == "") {
    //alert("Por Favor Rellenar Ciudad");
    ciudad.className += " error";
  } else {
    ciudad.className = "form-control";
  }
}
function comprobarPais() {
  if (pais.value == "Elegir") {
    //alert("Por Favor Seleccione un Pais");
    pais.className += " error";
  } else {
    pais.className = "form-control";
  }
}
function comprobarCodigo() {
  if (isNaN(codigo.value) == true || codigo.value == "") {
    //alert("por favor inserte numero correcto en Postal Code");
    codigo.className += " error";
  } else {
    codigo.className = "form-control";
  }
}
