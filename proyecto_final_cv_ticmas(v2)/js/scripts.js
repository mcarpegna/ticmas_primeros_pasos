// Se carga un nuevo perfil random cada vez que abrimos la página
const cargarPerfil = async () => {
    const respuesta = await fetch('https://randomuser.me/api/?results=1&nat=es&inc=name,location,email,cell,picture&noinfo');
    const datos = await respuesta.json();
    //Asigna un nuevo contenido a cada elemento en cada recarga 
    document.getElementById('nombre').textContent = datos.results[0].name.first + " " + datos.results[0].name.last;
    document.getElementById('celular').textContent = datos.results[0].cell;
    document.getElementById('email').textContent = datos.results[0].email;
    document.getElementById('ubicacion').textContent = datos.results[0].location.city + ", " + datos.results[0].location.country + ".";
    document.getElementById('miniatura').src = datos.results[0].picture.large;
    // Cambia el título de la página
    document.title = "CV - " + datos.results[0].name.first + " " + datos.results[0].name.last;
}
cargarPerfil();

// Recarga la página al dar click al boton Nuevo Perfil
let nuevo_perfil = document.getElementById('nuevo_perfil');
nuevo_perfil.addEventListener('click', function () {
    location.reload();
});

// Borra el contenido del formulario al enviarlo
let formulario = document.getElementById('formul');
formulario.addEventListener('submit', function () {
    formulario.reset();
});

// Modificar tarjetas al pasar el mouse por arriba (se puede hacer mas facilmente con CSS
// pero lo he hecho como desafío y práctica)
let tarjeta_nodelist = document.querySelectorAll('.tarjeta');

let i = 1;
for (i; i <= 10; i++) {
    tarjeta_nodelist[i].addEventListener('mouseenter', function (event) {
        this.style.background = 'var(--gris_claro';
    })
    tarjeta_nodelist[i].addEventListener('mouseleave', function (event) {
        this.style.background = 'linear-gradient(to right, #ffffff 0%, #f6f6f6 47%, var(--gris_claro) 100%)';
    })
}