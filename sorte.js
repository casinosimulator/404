// Substitua os links das imagens conforme necessário
const imagens = [
    'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_594/Background_1617807124.jpg#CasinoGameISoftBet/GameId_594/Mini_1696417990.jpg',
    'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_1414/Background_1616762028.jpg',
    'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_6498/Background_1647010348.jpg',
    'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_921/Background_1616762193.jpg',
  
    // Adicione mais links conforme necessário
];

function sortearImagem() {
    const imagemSorteada = document.getElementById('imagemSorteada');
    const indiceSorteado = Math.floor(Math.random() * imagens.length);
    const linkDaImagemSorteada = imagens[indiceSorteado];
    imagemSorteada.src = linkDaImagemSorteada;
}
