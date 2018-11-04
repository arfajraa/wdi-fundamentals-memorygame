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


var checkForMatch = function () {

    if (cardsInPlay.length === 2) {

        if (cardsInPlay[0] === cardsInPlay[1]) {
            // alert("You found a match!")
            alert("You found a match!");
        } else {
            // alert("Sorry, try again.")
            alert("Sorry, try again.");
        }

    }

}

var flipCard = function (cardId) {

    console.log("User flipped " + cards[cardId].rank + ".");
    console.log("Flipped card's image: " + cards[cardId].image);
    console.log("Flipped card's suit: " + cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);

    checkForMatch();
}

flipCard(0);
flipCard(2);
