<script>
    // Aquí va tu código JavaScript
    function validarFormulario() {
    var folio = document.getElementById("folio").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var inventario = document.getElementById("inventario").value;
    var solicitante = document.getElementById("solicitante").value;
    var area_solicitante = document.getElementById("area_solicitante").value;
    var receptor = document.getElementById("receptor").value;
    var area_receptor = document.getElementById("area_receptor").value;
    var autorizado_por = document.getElementById("autorizado_por").value;

    if (folio == "") {
    alert("Por favor ingrese el número de folio.");
    return false;
    }

    if (fecha == "") {
    alert("Por favor ingrese la fecha.");
    return false;
    }

    if (hora == "") {
    alert("Por favor ingrese la hora.");
    return false;
    }

    if (inventario == "") {
    alert("Por favor ingrese el número de inventario.");
    return false;
    }

    if (solicitante == "") {
    alert("Por favor ingrese el nombre del solicitante.");
    return false;
    }

    if (area_solicitante == "") {
    alert("Por favor ingrese el área de adscripción del solicitante.");
    return false;
    }

    if (receptor == "") {
    alert("Por favor ingrese el nombre del receptor.");
    return false;
    }

    if (area_receptor == "") {
    alert("Por favor ingrese el área de adscripción del receptor.");
    return false;
    }

    if (autorizado_por == "") {
    alert("Por favor ingrese el nombre de la persona que autoriza el traslado.");
    return false;
    }

    return true;
    }
  </script>
