document.addEventListener("DOMContentLoaded", function() {
    // Agregar la clase "visible" después de un retraso
    setTimeout(function() {
      const welcomeCard = document.querySelector(".welcome-card");
      welcomeCard.classList.add("visible");
    }, 500); // Retraso de 500ms
  });

  // Agregamos un evento "click" al botón de enviar
document.getElementById("enviar").addEventListener("click", function() {
  // Recopilamos los valores de los campos del formulario
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
   // Validamos que se haya completado al menos el nombre y el mensaje
   if (nombre && email && mensaje) {
    // Aquí puedes agregar código para enviar el formulario al servidor si es necesario

    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(emailFormat)) {
      // Aquí puedes agregar código para enviar el formulario al servidor si es necesario
    // Mostrar el mensaje de éxito en una alerta
    alert("Mensaje enviado con éxito. En breve te contestamos ¡Gracias!");

  } else {
    // Mostrar un mensaje de error si el formato del correo electrónico es incorrecto
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
  }
      
    } else {
      // Mostrar un mensaje de error si faltan campos obligatorios
      alert("Por favor, complete los campos obligatorios: Nombre, Email y Mensaje.");
    }
  });