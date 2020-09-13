class Card {
  constructor({
    value,
    suit
  }) {
    this.value = value;
    this.suit = suit;
  }
}



class Deck {
  constructor() {
    this.cards = [];

    const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    for (const suit of suits) {
      for (const value of values) {
        this.cards.push(new Card({
          value,
          suit
        }));
      }
    }
    this.shuffle();
  }
  shuffle() {
    // const deck = this.deck;
    const {
      cards
    } = this;

    let currentIndex = cards.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return this;
  }

}
const deck = new Deck(); //<- this needs to be in the game constructors

class Player {
  constructor({name, cards} = {}) {
    this.name = name;
    this.hand = deck.cards.splice(0, 26);
  }
}
class Game {
  constructor() {

  }
}
const Player1 = new Player()
const Player2 = new Player()
const rewards = []; // this is the reward array, the player who wins war takes these

play = function(p1, p2) {

  //checking to see if players still have cards
  if (Player1.hand.length === 0) { // game over for player1
    return 'Player 2 wins!'
  }
  if (Player2.hand.length === 0) { //game over for player2
    return 'Player 1 wins!'
  }
  //Comparing card values
  if (Player1.hand.splice(0, 1) > Player2.hand.splice(0, 1)) {  //compares the cards at index 0 between both hands
    console.log('Player 1 hand', Player1.hand);
    console.log('Player 2 hand', Player2.hand);
    let Player2card = Player2.hand.shift(); // if player1 value is bigger it takes player 2 card
    return Player1.hand.concat(Player2card); // adds it to the end of the array
  } else {
    console.log('Player 1 hand', Player1.hand);
    console.log('Player 2 hand', Player2.hand);
    let Player1Card = Player1.hand.shift(); //if player2 value is bigger it takes player 1 card
    return Player2.hand.concat(Player1Card); //adds it to the end of the array
  }
  // War
  if(Player1.hand.splice(0, 1) === Player2.hand.splice(0,1)){
    rewards.push(Player1Card);
    rewards.push(Player2card);
    console.log(rewards.push(Player1Card));
    console.log(rewards.push(Player2card));
    return rewards;
    console.log(rewards);
  }
}
play();
