const submitButton= document.getElementById('submitbutton');

const validate = (e) => {
  e.preventDefault();
  const nombreUsuario = document.getElementById('nombre');
  const apellidoUsuario = document.getElementById('apellido');
  const emailUsuario = document.getElementById('email');
  const telefonoUsuario = document.getElementById('telefono');
  const rucUsuario = document.getElementById('ruc');



  if (nombreUsuario.value === ""  || !validName(nombreUsuario.value) ) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, escribe un nombre válido.'
      });
    nombreUsuario.focus();
    return false;
  }

  if (apellidoUsuario.value === ""  || !validName(apellidoUsuario.value)) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, escribe un apellido válido.'
      });
    apellidoUsuario.focus();
    return false;
  }
  
   if (emailUsuario.value === ""  || !validemail(emailUsuario.value)) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, escribe un correo válido.'
      });
    emailUsuario.focus();
    return false;
  }



  if ( telefonoUsuario.value === "") {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, escribe tu telefono'
      });

    telefonoUsuario.focus();
    return false;
  }



  if ( rucUsuario.value === "") {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, escribe tu ruc.'
      });

    rucUsuario.focus();
    return false;
  }

  return     Swal.fire({
    icon: 'success',
    title: 'OK',
    text: 'Mensaje enviado'
  }), true; 
}


const validName = name =>{
    return /[a-zA-Z]+/g.test(name);
}
    
const validSurname =surname =>{
    return /[a-zA-Z]+/g.test(surname);
}
const validemail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}



submitButton.addEventListener('click', validate);