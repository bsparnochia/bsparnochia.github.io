const generarPerfil = async() =>{
  try{
    const url="https://randomuser.me/api/"
    const consulta = await fetch(url);
    const {results} = await consulta.json();
    const datos=results[0];
    //comprobamos que los datos del JSON llegaron
    console.log(datos);

    //Asignación de datos obtenidos de randomuser a  index.html
    document.getElementById("info").innerHTML = "Soy "+ datos.name.first+" "+datos.name.last +" y mi numero es: "+datos.cell;

  }catch(error){
    console.log(error);
  }
}

document.addEventListener('DOMContentLoaded',generarPerfil());

//BIIIEEEEEEEN VAMO LO PIBE