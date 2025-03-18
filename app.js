// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const input = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const botonAgregar = document.querySelector(".button-add");
const botonSortear = document.querySelector(".button-draw");
const resultado = document.getElementById("resultado");


botonAgregar.disabled = true;

function esNombreValido(nombre) {
    nombre = nombre.trim(); 

    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    return nombre.length > 0 && regex.test(nombre);
}



function mostrarAlerta(mensaje) {
    alert(mensaje);
}

input.addEventListener("input", function () {
    let nombreValido = esNombreValido(input.value);
    console.log("Nombre ingresado:", input.value, "| Es válido:", nombreValido);
    botonAgregar.disabled = !nombreValido;
});

function agregarAmigo() {
    console.log("agregarAmigo() llamada");

    let nombre = input.value.trim();
    console.log("Nombre ingresado:", nombre);

    if (!esNombreValido(nombre)) {
        console.log(" Nombre inválido detectado");
        mostrarAlerta(" Nombre inválido. Solo se permiten letras y espacios.");
        input.value = ""; 
        botonAgregar.disabled = true; 
        return;
    }

    console.log(" Nombre válido, agregando:", nombre);
    amigos.push(nombre);
    let li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    input.value = "";
    botonAgregar.disabled = true;
}


function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarAlerta(" Agrega al menos un amigo antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSeleccionado}</strong>! 🎉</li>`;
}

botonSortear.addEventListener("click", sortearAmigo);
