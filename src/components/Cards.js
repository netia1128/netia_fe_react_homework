import React from 'react'
import Card from './Card.js'

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

  console.log(cards)

  ;
  return (
    <section>
      {cards.map((card, index) => (
        <article key={index}>{card}</article>
      ))}
    </section>
  )
}

export default Cards;
