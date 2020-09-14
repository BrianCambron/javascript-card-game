class Card {
  constructor({
    value,
    suit
  }) {
    this.value = value;
    this.suit = suit;
  }
  get description() {
    const values = [null, null, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    return `${values[this.value]} of ${this.suit}`;
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
  constructor({
    name
  } = {}) {
    this.name = name;
    this.hand = deck.cards.splice(0, 26);
  }
}
const player1 = new Player();
const player2 = new Player();
let rewards = []; // this is the reward array, the player who wins war takes these

class Game {
  constructor({deck, players}={}) {
    this.deck = deck;
    this.players = players;
  }
  play = function(p1, p2) {

    while (player1.hand.length > 0 && player2.hand.length > 0) {
      console.log('test', player1.hand.slice(0, 1)[0].value);
      console.log('test', player2.hand.slice(0, 1)[0].value);
      console.log('Player 1 hand', player1.hand);
      console.log('Player 2 hand', player2.hand);

      // player1Card =
      // player2Card =
      //Comparing card values
      if (player1.hand.slice(0, 1)[0].value > player2.hand.slice(0, 1)[0].value) { //compares the cards at index 0 between both hands
        // console.log('Player 1 hand', player1.hand);
        // console.log('Player 2 hand', player2.hand);
        let player2Card = player2.hand.shift(); // if player1 value is bigger it takes player 2 card
        let player1Card = player1.hand.shift();
        player1.hand.push(player2Card); // adds it to the end of the array
        player1.hand.push(player1Card);
      } else if (player2.hand.slice(0, 1)[0].value > player1.hand.slice(0, 1)[0].value) {
        // console.log('Player 1 hand', player1.hand);
        // console.log('Player 2 hand', player2.hand);
        let player1Card = player1.hand.shift(); //if player2 value is bigger it takes player 1 card
        let player2Card = player2.hand.shift();
        player2.hand.push(player1Card); //adds it to the end of the array
        player2.hand.push(player2Card);
      } else if (player1.hand.slice(0, 1)[0].value === player2.hand.slice(0, 1)[0].value) { //WAR

        // if(player1.hand.length >= 3 && player2.hand.length >= 3){
        //
        // }

        let player1Card = player1.hand.shift();
        let player2Card = player2.hand.shift();
        // console.log('here', player1Card);
        // console.log('there', player2Card);
        rewards.push(player1Card);
        rewards.push(player2Card);

        while (player1Card.value === player2Card.value) {
          let faceDown1 = player1.hand.shift();
          let faceDown2 = player2.hand.shift();

          rewards.push(faceDown1);
          rewards.push(faceDown2);


          player1Card = player1.hand.shift();
          player2Card = player2.hand.shift();

          rewards.push(player1Card);
          rewards.push(player2Card);
        }



        if (player1Card.value > player2Card.value) {
          // console.log('player1.hand', player1.hand);
          player1.hand = player1.hand.concat(rewards);
          // player1.hand = [...player1.hand, ...rewards]
          // console.log('a', player1.hand.length);

        } else {
          // console.log('player2.hand', player2.hand);
          player2.hand = player2.hand.concat(rewards);
          // console.log('b', player2.hand.length);
          // player2.hand = [...player2.hand, ...rewards]
        }
        rewards = [];


      }
      //checking to see if players still have cards
      if (player1.hand.length === 0) { // game over for player1
        alert('Player 2 wins!');
      }
      if (player2.hand.length === 0) { //game over for player2
        alert('Player 1 wins!');
      }
    };

  }
};

const game = new Game();
game.play();


// game.play();

// play();
//   this.player1.hand = this.deck.cards.filter((card, index) => index % 2 === 0);
//   this.player2.hand = this.deck.cards.filter((card, index) => index % 2 !== 0)
// }
// draw(){
//   let player1card = this.player1.hand.shift();
//   let player2card = this.player2.hand.shift();
//   console.log(`
// ${this.player1.name} drew ${player1card.description}
// ${this.player1.name} drew ${{player1card.description}}`
// );
// }
