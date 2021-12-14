import React from 'react'
import Card from './Card.js'

const generateNewCardDeck = (numCards = Math.floor(Math.random() * 9)) => {
  let cards = [];

  for (let i = numCards; i > 0; i--) {
    const card = <Card id={i} key={i}/>
    cards.unshift(card);
  }

  return cards
}

const Cards = () => {

  let cards = generateNewCardDeck();

  console.log(cards)

  return (
    <section>
      {cards.map((card) => (
        <p>{card}</p>
        // <Card card={card} />
      ))}
    </section>
  )
}

export default Cards;
