/* generarPerfil() aprovecha las funcionalidades que provee la API de randomuser
 y captura los usuarios aleatorios para generar el curriculum con sus datos*/
const generarPerfil = async () => {
  try {
    const url = "https://randomuser.me/api/?inc=name,dob,location,nat,cell,email,picture"
    const consulta = await fetch(url);
    const { results } = await consulta.json();
    const datos = results[0];

    /* Asignación de datos obtenidos de randomuser.me 
    Edito nombre y apellido, edad, ubicación, teléfono y email según los datos recibido*/

    document.getElementById("imagen-cv").src = datos.picture.large;
    document.getElementById("nombre-apellido").innerHTML = datos.name.first + " " + datos.name.last;
    document.getElementById("edad").innerHTML = datos.dob.age + " años";
    document.getElementById("ubicacion").innerHTML = datos.location.state + ", " + datos.location.country;
    document.getElementById("telefono").innerHTML = datos.cell;
    document.getElementById("email").innerHTML = datos.email;
  } catch (error) {
    console.log(error);
  }
}

/* Se ejecuta generarPerfil() en cuanto la página a cargado completamente"*/
document.addEventListener('DOMContentLoaded', generarPerfil);

/**
 *  Transición fade-in al cargar la página
 */

const cajaPerfil = document.querySelector("#caja-perfil");
const cajaExperiencia = document.querySelector("#caja-experiencia");
const cajaEstudios = document.querySelector("#caja-estudios");
const cajaHabilidades = document.querySelector("#caja-habilidades");

function aparecerElementos() {
  let efectoAparecer = [
    { opacity: 0 },
    { opacity: 1 },
  ];

  let tiempo = {
    duration: 1000,
    iterations: 1,
  };

  cajaPerfil.animate(efectoAparecer, tiempo);
  cajaExperiencia.animate(efectoAparecer, tiempo);
  cajaEstudios.animate(efectoAparecer, tiempo);
  cajaHabilidades.animate(efectoAparecer, tiempo);
}

document.addEventListener('DOMContentLoaded', aparecerElementos);

/**
 * botón animación para girar Elementos
 */
function girarElementos() {

  const efectoRotacion = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];

  const tiempo = {
    duration: 2000,
    iterations: 1,
  };

  cajaPerfil.animate(efectoRotacion, tiempo);
  cajaExperiencia.animate(efectoRotacion, tiempo);
  cajaEstudios.animate(efectoRotacion, tiempo);
  cajaHabilidades.animate(efectoRotacion, tiempo);
}

document.getElementById("btn-refresh").addEventListener("click", girarElementos);

/**
 * funcionalidad para volver arriba al scrollear para abajo en mobile
 */
let mybutton = document.getElementById("btn-arriba");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function irArriba() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
