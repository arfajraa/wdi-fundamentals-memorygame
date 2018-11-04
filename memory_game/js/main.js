console.log("Up and running!");


var cards = [
    {rank: "queen",
    suit: "hearts",
    image: "images/queen-of-hearts.png"},
    {rank: "queen",
    suit: "diamonds",
    image: "images/queen-of-diamonds.png"},
    {rank: "king",
    suit: "hearts",
    image: "images/king-of-hearts.png"},
    {rank: "king",
    suit: "diamonds",
    image: "images/king-of-diamonds.png"}
];
var cardsInPlay = [];


var createBoard = function(){

    for (var i = 0; i < cards.length; i++){
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
}


var checkForMatch = function () {

    if (cardsInPlay.length === 2) {

        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }

    }

}

var flipCard = function () {

    this.setAttribute("src", cards[this.getAttribute("data-id")].image);
    var cardId = this.getAttribute("data-id");

    console.log("User flipped " + cards[cardId].rank + ".");
    console.log("Flipped card's image: " + cards[cardId].image);
    console.log("Flipped card's suit: " + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);

    checkForMatch();
}

var refreshWindow = function(){
    location = location;
}

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", refreshWindow);

createBoard();