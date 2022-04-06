/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let enviar = document.querySelector("#enviar");
console.log(enviar);
enviar.addEventListener("click", function() {
  alert("enviado");
});
