<script>
  // Obtén la referencia al campo de texto donde mostrarás el número de folio
const folio = document.getElementById('folio');

// Obtén la unidad seleccionada en el formulario
const unidad = document.getElementById('unidad').value;

// Genera un número de folio automático con las iniciales de la unidad
const numeroFolio = unidad.substr(0, 2) + Math.floor(Math.random() * 1000);

// Actualiza el valor del campo de texto con el número de folio generado
folio.value = numeroFolio;
</script>
