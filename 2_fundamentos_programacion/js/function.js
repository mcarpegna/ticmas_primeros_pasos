
// Definimos la función hola mundo
function holaMundo() {
    console.log("Hola mundo!");
}

// Invocamos la función hola mundo
holaMundo();

function sumar(a, b) {
    return a + b;
}

var suma = sumar(3, 4);
console.log(suma);

//Manejo del DOM (Document Object Model)
document.getElementById('boton').addEventListener('click', function () {
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento";
});

document.getElementById('boton_color').addEventListener('click', function () {
    document.body.style.backgroundColor = '#FF0000';
});

document.getElementById('boton_default').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('boton_ocultar').addEventListener('click', function () {
    document.getElementById('demo').style.display = 'none';
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
}



