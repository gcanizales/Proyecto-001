  // Obtener la fecha y hora actual
  let fechaActual = new Date();
  let horaActual = fechaActual.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  let fechaFormateada = fechaActual.getFullYear() + "-" + ('0' + (fechaActual.getMonth() + 1)).slice(-2) + "-" + ('0' + fechaActual.getDate()).slice(-2);
  
  // Establecer los valores de fecha y hora en el formulario
  document.getElementById("fecha").value = fechaFormateada;
  document.getElementById("hora").value = horaActual;

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
