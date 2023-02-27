/* generarPerfil() aprovecha las funcionalidades que provee la API de randomuser
 y captura los usuarios aleatorios para generar el curriculum con sus datos*/
const generarPerfil = async() =>{
  try{
    const url="https://randomuser.me/api/?inc=name,dob,location,nat,cell,email,picture"
    const consulta = await fetch(url);
    const {results} = await consulta.json();
    const datos=results[0];

    /* Asignación de datos obtenidos de randomuser.me 
    Edito nombre y apellido, edad, ubicación, teléfono y email según los datos recibido*/

    document.getElementById("imagen-cv").src=datos.picture.large;
    document.getElementById("nombre-apellido").innerHTML=datos.name.first+" "+datos.name.last;
    document.getElementById("edad").innerHTML=datos.dob.age +" años";
    document.getElementById("ubicacion").innerHTML=datos.location.state+", "+datos.location.country;
    document.getElementById("telefono").innerHTML=datos.cell;
    document.getElementById("email").innerHTML=datos.email;
  }catch(error){
    console.log(error);
  }
}

/* Se ejecuta generarPerfil() en cuanto la página a cargado completamente"*/
document.addEventListener('DOMContentLoaded',generarPerfil());