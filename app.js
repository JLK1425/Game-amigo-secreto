// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre
function agregarAmigo() {
  // Obtener el valor del campo de texto
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final

  // Validar que el nombre no esté vacío
  if (nombre === "") {
    alert("Debe ingresarse un nombre válido.");
    return; // Detener la función si el nombre está vacío
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Limpiar el campo de texto
  input.value = "";

  // Mostrar la lista actualizada de amigos
  mostrarAmigos();
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

  // Recorrer el array de amigos y agregarlos a la lista
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Función para realizar el sorteo
function sortearAmigo() {
  // Validar que haya al menos 2 amigos para realizar el sorteo
  if (amigos.length < 2) {
    alert("Debe haber al menos 2 amigos para realizar el sorteo.");
    return; // Detener la función si no hay suficientes amigos
  }

  // Escoger un nombre aleatorio del array
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  // Mostrar el resultado del sorteo
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
}
