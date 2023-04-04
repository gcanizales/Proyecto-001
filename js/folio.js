// Obtén la referencia al campo de texto donde mostrarás el número de folio
  const folio = document.getElementById('folio');

// Función que genera el número de folio
  function generarFolio() {
// Obtén la unidad seleccionada en el formulario
  const unidad = document.getElementById('unidad').value;
  
// Separa la unidad en sus partes (ciudad, calle y número) usando el guion como separador
  const partesUnidad = unidad.split('-');
  
// Obtiene la ciudad, la calle y el número de la unidad
  const ciudad = partesUnidad[0].toUpperCase();
  const calleNumero = partesUnidad.slice(1).join(' ').toUpperCase();
  
// Genera un número de folio automático con las iniciales de la unidad, fecha y hora
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().substr(-2);
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');
  const numeroFolio = ciudad.substr(0, 4) + "-" + calleNumero.substr(0, 5) + "-" + day + month + year + "-" + hour + minute + second;

// Actualiza el valor del campo de texto con el número de folio generado
  folio.value = numeroFolio;
}

// Llama a la función para generar el número de folio inicial
  generarFolio();

// Agrega un listener al select para que llame a la función cada vez que cambie la unidad seleccionada
  document.getElementById('unidad').addEventListener('change', generarFolio);