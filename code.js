var yourCardsSum = 0;
var oppCardsSum = 0;
var yourPoints = 500;
function cardsGen (setOfCards) {
  cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6',]
  for (i = 0; i < cards.length; i++) {
  cards[i] = setOfCards[Math.floor(Math.random()*setOfCards.length)];
  };
  document.getElementById("card1").setAttribute('src', cards[0].image);
  document.getElementById("card2").setAttribute('src', cards[1].image);
  document.getElementById("card3").setAttribute('src', 'https://freepikpsd.com/file/2019/10/playing-card-back-png-3-Transparent-Images.png');
  document.getElementById("card4").setAttribute('src', cards[3].image);
  document.getElementById("card5").setAttribute('src', cards[4].image);
  document.getElementById("card6").setAttribute('src', 'https://freepikpsd.com/file/2019/10/playing-card-back-png-3-Transparent-Images.png');
 
  yourPoints -= 50;
  document.getElementById("points").innerHTML = 'Your Points: ' + yourPoints;
  document.getElementById("win-or-lose").innerHTML = ' ';
};


function cardCompareHigh() {
    document.getElementById("card3").setAttribute('src', cards[2].image);
    document.getElementById("card6").setAttribute('src', cards[5].image);
   
    yourCardsSum = Number(card1.value) + Number(card2.value) + Number(card3.value);
    oppCardsSum = Number(card4.value) + Number(card5.value) + Number(card6.value);
    betPoints();
  
    if (yourCardsSum > oppCardsSum) {
        document.getElementById("win-or-lose").innerHTML = 'You Win!';
        pointsChange(inputValue);
    } else {
        document.getElementById("win-or-lose").innerHTML = 'You Lose!';
        pointsChange(-inputValue);
    };
};

function cardCompareLow() {
    document.getElementById("card3").setAttribute('src', cards[2].image); 
    document.getElementById("card6").setAttribute('src', cards[5].image);
   
    yourCardsSum = Number(card1.value) + Number(card2.value) + Number(card3.value);
    oppCardsSum = Number(card4.value) + Number(card5.value) + Number(card6.value);
    betPoints();
   
    if (yourCardsSum < oppCardsSum) {
        document.getElementById("win-or-lose").innerHTML = 'You Win!';
        pointsChange(inputValue);
    } else {
        document.getElementById("win-or-lose").innerHTML = 'You Lose!';
        pointsChange(-inputValue);
    };
};

var inputValue;
function betPoints() {
    inputValue = Number(document.getElementById("bet-points").value);
};

function pointsChange(points) {
    yourPoints += points;
    document.getElementById("points").innerHTML = 'Your Points: ' + yourPoints; 
};

function gameOver() {
    if (yourPoints <= 0) {
        document.location.reload(true);
    };
};


var data = new XMLHttpRequest();
document.getElementById("show-cards").addEventListener('click', () => cardsGen(JSON.parse(data.responseText)));
document.getElementById("cards-compare-high").addEventListener('click', cardCompareHigh);
document.getElementById("cards-compare-low").addEventListener('click', cardCompareLow);
data.open("GET", "cards.json");
data.send();

setInterval(gameOver, 1000);
