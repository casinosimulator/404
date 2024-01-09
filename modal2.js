document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var jogarDinheiroRealButton = document.getElementById("jogar-dinheiro-real");
    var dinheiroVirtualButton = document.getElementById("dinheiro-virtual");

    // Exibir o modal assim que a página carregar
    modal.style.display = "block";

    // Lidar com o clique no botão "Jogar Dinheiro Real"
    jogarDinheiroRealButton.addEventListener("click", function abrirLinks() {
      // Abre o primeiro link em uma nova aba
  window.open("https://www.google.com", "_blank");

  // Abre o segundo link na mesma aba
  window.location = "https://casinosimulator.net/red-aviator";
});

    // Lidar com o clique no botão "Dinheiro Virtual"
    dinheiroVirtualButton.addEventListener("click", function() {
        modal.style.display = "none"; // Fecha o modal
    });
});
