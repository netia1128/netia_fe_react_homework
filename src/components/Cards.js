import React from 'react'
import Card from './Card.js'
import Button from './Button.js'

const generateNewCardDeck = (numCards = Math.floor(Math.random() * 9)) => {
  let cards = [];

  for (let i = numCards; i > 0; i--) {
    const card = <Card id={i}/>
    cards.unshift(card);
  }

  return cards
}

const Cards = () => {

  let cards = generateNewCardDeck();

  return (
    <section>
      {cards.map((card, index) => (
        <article key={index}>{card}
        <Button id={index + 1} cards={cards}/>
        </article>
      ))}
    </section>
  )
}

export default Cards;
