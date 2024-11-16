class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let j, temp;

    for (let i = this.cards.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i+1));
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
  }

  checkIfPair(card1, card2) {
    const card1Name = card1.getAttribute('data-card-name');
    const card2Name = card2.getAttribute('data-card-name');

    this.pairsClicked++;
    document.querySelector('#pairs-clicked').innerHTML = this.pairsClicked;
    if(card1Name === card2Name){
      this.pairsGuessed++;
      document.querySelector('#pairs-guessed').innerHTML = this.pairsGuessed;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // if we have 12 pairs
    if(this.pairsGuessed === 12){
      console.log('Game is finished :)')
    }
  }
}
