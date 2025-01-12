document.getElementById("idHeader").innerHTML = `
<div id="menuf1">
<div id="menuf1_columna_izquierda"><i class="fa-solid fa-phone"></i> +54 11 5555-5555</div>
<div id="menuf1_columna_derecha">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram fa-shake"></i>
    <i class="fa-brands fa-whatsapp fa-bounce"></i>
</div>
</div>
<nav class="menuf2 navbar navbar-expand-lg navbar-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Broker</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="preguntas-frecuentes.html">Preguntas frecuentes</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Planes
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="planes.html">Plan 1</a></li>
          <li><a class="dropdown-item" href="planes.html">Plan 2</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="planes.html">Otro plan</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contacto.html">Contáctanos</a>
      </li>
    </ul>
    </div>
</div>
</nav>
`;
// Busco que el menu quede siempre visible
window.onscroll = function() {siempreVisible()};
var header = document.getElementById("idHeader");
var sticky = header.offsetTop;
function siempreVisible() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}