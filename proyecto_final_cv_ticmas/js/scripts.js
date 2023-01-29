// Cargar un nuevo perfil random cada vez
const cargarPerfil = async () => {
    const respuesta = await fetch('https://randomuser.me/api/?results=1&nat=es&inc=name,location,email,cell,picture&noinfo');
    const datos = await respuesta.json();
    //Asigna un nuevo contenido a cada elemento en cada recarga   
    let nombre = datos.results[0].name.first + " " +datos.results[0].name.last;
    let celular = datos.results[0].cell;
    let email = datos.results[0].email;
    let ubicacion = datos.results[0].location.city + ", " + datos.results[0].location.country + ".";
    let foto = datos.results[0].picture.large;
    
    document.getElementById('nombre').textContent = nombre;

    document.getElementById('celular').textContent = celular;

    document.getElementById('email').textContent = email;

    document.getElementById('ubicacion').textContent = ubicacion;

    document.getElementById('miniatura').src = foto;
}    
cargarPerfil();
//Recarga la página al dar click al boton Nuevo Perfil
let nuevo_perfil = document.getElementById('nuevo_perfil');
nuevo_perfil.addEventListener('click', function () {
    location.reload();
});

// Borra el contendio del formulario al enviarlo
document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formul');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
});