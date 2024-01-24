/* Estilizando a barra de rolagem vertical */
::-webkit-scrollbar {
   width: 1px; /* Largura da barra de rolagem */
}

::-webkit-scrollbar-thumb {
   background: #9daab6; /* Cor da barra de rolagem */
}

::-webkit-scrollbar-track {
   background: #666; /* Cor da trilha da barra de rolagem */
}

/* Estilizando a barra de rolagem horizontal (opcional) */
::-webkit-scrollbar-horizontal {
   height: 1px; /* Altura da barra de rolagem horizontal */
}

::-webkit-scrollbar-thumb:horizontal {
   background: #666; /* Cor da barra de rolagem horizontal */
}

::-webkit-scrollbar-track:horizontal {
   background: #9daab6; /* Cor da trilha da barra de rolagem horizontal */
}
/* Estilos para o modal */
.modal {
   display: none;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.7);
}

.modal-content {
   background: #000;
   width: 300px;
   padding: 20px;
   text-align: center;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: #fff; /* Cor do texto em branco */
   border: 2px solid #385171; /* Contorno vermelho */
   box-shadow: 0 0 10px #385171; /* Sombra vermelha */
}

.btn {
   padding: 10px 20px;
   margin: 10px;
   background-color: #385171; /* Cor de fundo vermelha */
   color: #fff; /* Cor do texto em branco */
   border: none; /* Remove a borda padrão */
   border-radius: 5px; /* Borda arredondada */
   cursor: pointer; /* Cursor de mão para indicar que é um botão */
   transition: background-color 0.3s; /* Efeito de transição de cor de fundo */
}

.btn:hover {
   background-color: #05172f; /* Cor de fundo alterada quando o mouse passa por cima */
}
button#dinheiro-real {

   padding: 10px 20px;
   margin: 10px;
   background-color: #385171; /* Cor de fundo vermelha */
   color: #fff; /* Cor do texto em branco */
   border: none; /* Remove a borda padrão */
   border-radius: 5px; /* Borda arredondada */
   cursor: pointer; /* Cursor de mão para indicar que é um botão */
   transition: background-color 0.3s; /* Efeito de transição de cor de fundo */
}

button#dinheiro-real:hover {
   background-color: #05172f; /* Cor de fundo alterada quando o mouse passa por cima */
}
body {
   margin: 0;
   padding: 0;
   background-color: #1a1919;
}
iframe {
   width: 100%;
   height: 95vh;
}
.toggle-fullscreen-btn {
   position: fixed;
   z-index: 10000;
   top: 1vh;
       right: 2vh;
   border: 0;
   padding: 0;
   background: none;
   cursor: pointer;
   outline: none;
   margin-right: 2vh;
}
.toggle-fullscreen-svg {
   display: block;
   height: auto;
}

.toggle-fullscreen-svg path {
   transform-box: view-box;
   transform-origin: 12px 12px;
   fill: none;
   stroke: hsl(225, 10%, 8%);
   stroke-width: 4;
   transition: .15s;
}
.toggle-fullscreen-btn:hover path:nth-child(1),
.toggle-fullscreen-btn:focus path:nth-child(1) {
   transform: translate(-2px, -2px);
}

.toggle-fullscreen-btn:hover path:nth-child(2),
.toggle-fullscreen-btn:focus path:nth-child(2) {
   transform: translate(2px, -2px);
}

.toggle-fullscreen-btn:hover path:nth-child(3),
.toggle-fullscreen-btn:focus path:nth-child(3) {
   transform: translate(2px, 2px);
}

.toggle-fullscreen-btn:hover path:nth-child(4),
.toggle-fullscreen-btn:focus path:nth-child(4) {
   transform: translate(-2px, 2px);
}


.toggle-fullscreen-btn:not(.on) .icon-fullscreen-leave {
   display: none;
}

.toggle-fullscreen-btn.on .icon-fullscreen-enter {
   display: none;
}
header {
   background-color: #181e29;
   width: 100%;
   height: 30;
}
span{
    color: white;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: -25px;
}
a {
    text-decoration: none;
  }
#relogio {
     font-family: 'Arial', sans-serif;
     font-size: 24px;
     color: white;
     margin-left: 2vh;
   }

svg {
   margin-top: -1vh;
}
@media (max-width: 768px) {
   
   ::-webkit-scrollbar {
       width: 10px;
       height:2px;
   }
   #relogio {
     font-family: 'Arial', sans-serif;
     font-size: 24px;
     color: white;
     margin-left: 2vh;
    display:none;
   }
}
