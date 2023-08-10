function alternarAparecer() {
    const aparecerDiv = document.getElementById("aparecer");
    aparecerDiv.style.display = aparecerDiv.style.display === "block" ? "none" : "block";
}

// Ouvinte de evento para o ícone de menu (hamburger)
const hamburgerIcon = document.getElementById("hamburgerIcon");
hamburgerIcon.addEventListener("click", alternarAparecer);

// Ouvinte de evento para o ícone de busca (lupa)
const searchIcon = document.getElementById("searchIcon");
searchIcon.addEventListener("click", alternarAparecer);

$(document).ready(function() {
    $('#hamburgerIcon').click(function() {
      $(this).toggleClass('fa-bars fa-times');
      // Adicione aqui o código para abrir ou fechar o menu conforme necessário
    });
  });