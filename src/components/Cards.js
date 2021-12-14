import React from 'react'
import Card from './Card.js'

const Cards = () => {

  const generateNewCardDeck = (numCards = Math.floor(Math.random() * 9)) => {
    let cards = [];

    for (let i = numCards; i > 0; i--) {
      const card = <Card id={i}/>
      cards.unshift(card);
    }

    return cards
  }

  return (
    <section>
        {generateNewCardDeck()}
    </section>
  )
}

export default Cards;
