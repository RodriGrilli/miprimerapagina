//alert("Bienvenidos a la pagina de Rodrigo Grilli");

let nombre1 = "Rodrigo";

var nombre2 = "Rodrigo";

const nombre3 = "Rodrigo";
// nombre2 = "Maria";  salta error pq al ser constante no puede tener otro nombre;

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);

let contenidoTitulo = "Rodrigo";


let acercaDeElement = document.querySelector(".acerca-de h2");


let textoTituloAcercaDe = acercaDeElement.innerText;

if (textoTituloAcercaDe === "Acerca de mí") {
    acercaDeElement.innerText = "Otro";
} else {
    console.log("La condición no se cumple, el texto del título ya ha sido modificado o no coincide.");
}

//FUNCIONES

let nombre4 = "Rodrigo";
let ciudad = "Salto";
let gusto = "deportes";

let parrafo = document.querySelector(".parrafo2");

function cambiartexto(nombre4, ciudad, gusto) {
    let contenido = `Hola, me llamo ${nombre}, nací en ${ciudad} y vivo aquí. 
    Me gustan mucho los ${gusto} y todo lo que tenga que ver con computadoras. 
    Me gustaría aprender a programar videojuegos.`;

    return contenido;
};

parrafo.innerText = cambiartexto (nombre4, ciudad, gusto);

//boton

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});