function searchImages() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
  
    // Replace the following array with the data from your server or database
    var imageData = [
      { src: 'https://static.gambling-malta.com/casino/CasinoGameISoftBet/GameId_594/Background_1617807124.jpg#CasinoGameISoftBet/GameId_594/Mini_1696417990.jpg', alt: 'Absolute Super Reels', link: 'absolute-super-reels' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_1414/Background_1616762028.jpg', alt: 'Age of the Gods Apollo Power', link: 'age-of-the-gods-apollo-power' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_6498/Background_1647010348.jpg', alt: 'Age of the Gods Maze Keeper', link: 'age-of-the-gods-maze-keeper' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_921/Background_1616762193.jpg', alt: 'Age of the Gods Rulers of Olympus', link: 'age-of-the-gods-rulers-of-olympus' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePlaytech/GameId_11595/Background_1694772767.jpg', alt: 'Animal Instinct', link: 'animal-instinct' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGameSpribe/GameId_3337/Background_1688559153.jpg', alt: 'Aviator', link: 'aviator' },
      { src: 'https://static.gambling-malta.com/casino/CasinoGamePragmaticPlay/GameId_7207/Background_1655466135.jpg', alt: 'orange', link: 'big-bass-splash' },
      { src: 'image3.jpg', alt: 'orange', link: 'https://www.youtube.com/' },
      { src: 'image3.jpg', alt: 'orange', link: 'https://www.youtube.com/' },
      { src: 'image3.jpg', alt: 'orange', link: 'https://www.youtube.com/' },
      { src: 'image3.jpg', alt: 'orange', link: 'https://www.youtube.com/' },
      // Add more image data as needed
    ];
  
    imageData.forEach(function (image) {
      if (image.alt.toLowerCase().includes(searchTerm)) {
        var imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
  
        var linkElement = document.createElement('a');
        linkElement.href = image.link;
        linkElement.target = '_blank';
        linkElement.appendChild(imgElement);
  
        imageContainer.appendChild(linkElement);
      }
    });
}