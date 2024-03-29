const contactos = [
  {
    id: 1,
    nombres: "Gustavo",
    apellidos: "Lopez",
    telefono: "9550-0000",
    ubicaciones: [
      {
        ciudad: "Ciudad A",
        direccion: "Calle 123"
      },
      {
        ciudad: "Ciudad B",
        direccion: "Avenida 456"
      }
    ]
  },

];

function mostrarContactos() {
  const lista = document.getElementById("contactos-lista");
  lista.innerHTML = ""; // Limpiar la lista antes de mostrar los contactos

  for (let contacto of contactos) {
    const item = document.createElement("li");
    item.textContent = `${contacto.nombres} ${contacto.apellidos} - Teléfono: ${contacto.telefono}`;
    lista.appendChild(item);
  }
}

function agregarContacto(event) {
  event.preventDefault(); // Evitar el envío del formulario (recarga de la página)

  const nombreInput = document.getElementById("nombre");
  const apellidoInput = document.getElementById("apellido");
  const telefonoInput = document.getElementById("telefono");
  const ciudadInput = document.getElementById("ciudad");
  const direccionInput = document.getElementById("direccion");

  const nombres = nombreInput.value.trim();
  const apellidos = apellidoInput.value.trim();
  const telefono = telefonoInput.value.trim();
  const ciudad = ciudadInput.value.trim();
  const direccion = direccionInput.value.trim();

  if (nombres !== "" && apellidos !== "" && telefono !== "" && ciudad !== "" && direccion !== "") {
    const nuevoContacto = {
      id: contactos.length + 1,
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      ubicaciones: [
        {
          ciudad: ciudad,
          direccion: direccion
        }
      ]
    };
    contactos.push(nuevoContacto);
    mostrarContactos();
    nombreInput.value = "";
    apellidoInput.value = "";
    telefonoInput.value = "";
    ciudadInput.value = "";
    direccionInput.value = "";

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

function modificarContacto(event) {
  event.preventDefault(); // Evitar el envío del formulario (recarga de la página)

  const indiceInput = document.getElementById("indice-modificar");
  const indice = parseInt(indiceInput.value);

  const nombresInput = document.getElementById("nombres-modificar");
  const apellidosInput = document.getElementById("apellidos-modificar");
  const telefonoInput = document.getElementById("telefono-modificar");
  const ciudadInput = document.getElementById("ciudad-modificar");
  const direccionInput = document.getElementById("direccion-modificar");

  const nuevosDatos = {
    nombres: nombresInput.value.trim(),
    apellidos: apellidosInput.value.trim(),
    telefono: telefonoInput.value.trim(),
    ubicaciones: [
      {
        ciudad: ciudadInput.value.trim(),
        direccion: direccionInput.value.trim()
      }
    ]
  };

  modificarContacto(indice, nuevosDatos);

  // Limpiar los campos del formulario después de modificar el contacto
  indiceInput.value = "";
  nombresInput.value = "";
  apellidosInput.value = "";
  telefonoInput.value = "";
  ciudadInput.value = "";
  direccionInput.value = "";
}

function modificarContacto(indice, nuevosDatos) {
  if (indice >= 0 && indice < contactos.length) {
    const contactoModificado = { ...contactos[indice], ...nuevosDatos };
    contactos[indice] = contactoModificado;
    mostrarContactos();

    // Salida en la consola del navegador
    console.log("Contacto modificado:");
    console.log(contactoModificado);
  }
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