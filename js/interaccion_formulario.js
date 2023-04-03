<script>
  // Obtener la fecha y hora actual
  const fecha = new Date();
  const anio = fecha.getFullYear().toString().substr(-2);
  const mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
  const dia = ('0' + fecha.getDate()).slice(-2);
  const hora = ('0' + fecha.getHours()).slice(-2);
  const minuto = ('0' + fecha.getMinutes()).slice(-2);
  const segundo = ('0' + fecha.getSeconds()).slice(-2);

  // Generar el número de folio
  const numeroFolio = `${anio}${mes}${dia}${hora}${minuto}${segundo}`;

  // Mostrar el número de folio generado en la consola
  console.log(`El número de folio generado es: ${numeroFolio}`);
  
  //línea que actualiza el valor del campo de entrada con el número de folio generado
  document.getElementById("folio").value = numeroFolio;
</script>
