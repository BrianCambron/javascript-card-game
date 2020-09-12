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
  constructor({name, cards}={}){
    this.name = name;
    this.hand = deck.cards.splice(0,26);
  }
}
class Game {
  constructor(){

  }
}
const Player1 = new Player()
const Player2 = new Player()

play = function (p1, p2) {
//if else to check if each player has cards
    if (Player1.hand.splice(0, 1) > Player2.hand.splice(0, 1)) {
        let Player2card = Player2.hand.shift()
        return Player1.hand.push()
    } else {
        let Player1card = Player1.hand.shift()
        return Player2.hand.push()
    }
}
play();
