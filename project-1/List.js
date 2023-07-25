const contactos = [
  { nombre: "Juan", apellido: "Pérez" },
  { nombre: "María", apellido: "González" },
  { nombre: "Carlos", apellido: "López" },
  { nombre: "Ana", apellido: "Martínez" },
  { nombre: "Luis", apellido: "Ramírez" },
  { nombre: "Laura", apellido: "Hernández" },
  { nombre: "Pedro", apellido: "Díaz" },
  { nombre: "Isabel", apellido: "Sánchez" },
  { nombre: "Fernando", apellido: "Torres" },
  { nombre: "Lucía", apellido: "Romero" }
];

function mostrarContactos() {
  const lista = document.getElementById("contactos-lista");
  lista.innerHTML = ""; // Limpiar la lista antes de mostrar los contactos

  for (let contacto of contactos) {
    const item = document.createElement("li");
    item.textContent = contacto.nombre + " " + contacto.apellido;
    lista.appendChild(item);
  }
}

function agregarContacto(event) {
  event.preventDefault(); // Evitar el envío del formulario (recarga de la página)

  const nombreInput = document.getElementById("nombre");
  const apellidoInput = document.getElementById("apellido");

  const nombre = nombreInput.value.trim();
  const apellido = apellidoInput.value.trim();

  if (nombre !== "" && apellido !== "") {
    const nuevoContacto = { nombre: nombre, apellido: apellido };
    contactos.push(nuevoContacto);
    mostrarContactos();
    nombreInput.value = "";
    apellidoInput.value = "";

    // Salida en la consola del navegador
    console.log("Nuevo contacto agregado:");
    console.log(nuevoContacto);
  }
}

function borrarContacto(event) {
  event.preventDefault(); // Evitar el envío del formulario (recarga de la página)

  const indiceInput = document.getElementById("indice");
  const indice = parseInt(indiceInput.value);

  if (!isNaN(indice) && indice >= 0 && indice < contactos.length) {
    const contactoBorrado = contactos.splice(indice, 1)[0];
    mostrarContactos();

    // Salida en la consola del navegador
    console.log("Contacto borrado:");
    console.log(contactoBorrado);
  }

  indiceInput.value = "";
}

function imprimirContactos() {
  console.log("Lista de contactos:");
  for (let contacto of contactos) {
    console.log(contacto);
  }

  // Activar la función de impresión del navegador
  window.print();
}

// Mostrar los contactos al cargar la página
mostrarContactos();

// Salida inicial en la consola del navegador
console.log("Lista de contactos inicial:");
console.log(contactos);