// Función para validar y enviar el formulario
function submitForm() {
  // Validación del formulario
  const nombreUsuario = document.getElementById('nombre');
  const apellidoUsuario = document.getElementById('apellido');
  const emailUsuario = document.getElementById('email');
  const telefonoUsuario = document.getElementById('telefono');
  const rucUsuario = document.getElementById('ruc');

  if (nombreUsuario.value === "" || !validName(nombreUsuario.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, escribe un nombre válido.'
    });
    nombreUsuario.focus();
    return false;
  }

  if (apellidoUsuario.value === "" || !validName(apellidoUsuario.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, escribe un apellido válido.'
    });
    apellidoUsuario.focus();
    return false;
  }

  if (emailUsuario.value === "" || !validemail(emailUsuario.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, escribe un correo válido.'
    });
    emailUsuario.focus();
    return false;
  }

  if (telefonoUsuario.value === "") {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, escribe tu telefono'
    });
    telefonoUsuario.focus();
    return false;
  }

  if (rucUsuario.value === "") {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, escribe tu ruc.'
    });
    rucUsuario.focus();
    return false;
  }

  // Creación del JSON a enviar
  const jsonObject = {
    nombre: nombreUsuario.value,
    apellido: apellidoUsuario.value,
    email: emailUsuario.value,
    telefono: telefonoUsuario.value,
    ruc: rucUsuario.value
  };

  // Envío del formulario usando Fetch API
  fetch("http://localhost:8000/create_contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObject),
  })
    .then((response) => response.json())
    .then((data) => {
      // Manejo de la respuesta del servidor (opcional)
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Formulario enviado correctamente.",
      });

      // Limpiar formulario después de enviarlo con éxito (opcional)
      const contactForm = document.getElementById("contactForm");
      contactForm.reset();
    })
    .catch((error) => {
      // Manejo de errores durante la solicitud
      console.error("Error sending form data:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al enviar el formulario. Inténtalo de nuevo más tarde.",
      });
    });

  // Indicar que la validación y el envío fueron exitosos
  return true;
}

// Funciones de validación
function validName(name) {
  return /[a-zA-Z]+/g.test(name);
}

function validemail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Event Listener para el botón de envío
const submitButton = document.getElementById('submitbutton');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  submitForm();
});
