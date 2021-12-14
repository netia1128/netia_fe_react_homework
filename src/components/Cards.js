import React from 'react'
import Card from './Card.js'
import { useState, useEffect } from 'react';

const generateNewCardDeck = (numCards = Math.floor(Math.random() * 9)) => {
  let cards = [];

  for (let i = numCards; i > 0; i--) {
    // const card = <Card id={i}/>
    cards.unshift(i);
  }

  return cards
}

const Cards = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {setCards(generateNewCardDeck())}, []);
  
  const deleteCard = (id) => {
    setCards(cards.filter((card) => card !== id));
  }
  
  return (
    <>
      {cards.map((card) => (
        <Card key={card} id={card} deleteCard={deleteCard}/>
      ))}
      </>
  )
}

export default Cards;
