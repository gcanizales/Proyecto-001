
  // Obtén la referencia al campo de texto donde mostrarás el número de folio
const folio = document.getElementById('folio');

// Obtén la unidad seleccionada en el formulario
const unidad = document.getElementById('unidad').value;

// Genera un número de folio automático con las iniciales de la unidad, fecha y hora
const date = new Date();
const day = date.getDate().toString().padStart(2, '0');
const month = (date.getMonth() + 1).toString().padStart(2, '0');
const year = date.getFullYear().toString().substr(-2);
const hour = date.getHours().toString().padStart(2, '0');
const minute = date.getMinutes().toString().padStart(2, '0');
const second = date.getSeconds().toString().padStart(2, '0');
const numeroFolio = unidad.substr(0, 2) + day + month + year + hour + minute + second;

// Actualiza el valor del campo de texto con el número de folio generado
folio.value = numeroFolio;

