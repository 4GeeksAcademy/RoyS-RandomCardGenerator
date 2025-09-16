function generateCard() {
  
  let suits = ["hearts", "spades", "clubs", "diamonds"];
  let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let suit = suits[Math.floor(Math.random() * suits.length)];
  let value = values[Math.floor(Math.random() * values.length)];

 
  let suitSymbols = {
    hearts: "♥",
    spades: "♠",
    clubs: "♣",
    diamonds: "♦"
  };

  
  let cardDiv = document.getElementById("card");

  // cardDiv.className = "card " + suit;

  cardDiv.innerHTML = `
    <div class="corner top-left ${suit}">${value}${suitSymbols[suit]}</div>
    <div class="${suit}" >${value}${suitSymbols[suit]}</div>
    <div class="corner bottom-right ${suit}">${value}${suitSymbols[suit]}</div>
  `;
}

window.onload = ()=> {
const button = document.querySelector("button")
button.addEventListener("click", generateCard)
generateCard()
};