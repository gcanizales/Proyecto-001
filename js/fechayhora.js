// Obtener la fecha y hora actual
  function actualizarHora() {
  let fechaActual = new Date();
  let horaActual = fechaActual.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});
  
  // Establecer los valores de fecha y hora en el formulario
  document.getElementById("fecha").value = fechaActual.toISOString().slice(0,10);
  document.getElementById("hora").value = horaActual;
}

// Ejecuta la función actualizarHora cada segundo
setInterval(actualizarHora, 1000);


  // Obtener la fecha actual
      //let fecha = new Date();

  // Obtener día, mes y año con dos dígitos
      //let dia = fecha.getDate().toString().padStart(2, '0');
      //let mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      //let anio = fecha.getFullYear();

  // Formatear la fecha
      //let fechaFormateada = `${dia}/${mes}/${anio}`;

  // Asignar la fecha al campo de formulario
      //document.getElementById('fecha').value = fechaFormateada;