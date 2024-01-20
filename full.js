// Variável global
let fullscreen = false;

// Função para verificar se o botão foi clicado
function buttonPressed() {
  // Verifica se o botão foi clicado
  if (document.getElementById("fullscreen").clicked) {
    // Altera o estado da tela cheia
    fullscreen = !fullscreen;

    // Ativa ou desativa a tela cheia
    if (fullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}

// Registra o evento de clique no botão
document.getElementById("fullscreen").addEventListener("click", buttonPressed);
