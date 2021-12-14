import { useState } from 'react';

const Button = ({cards, id}) => {

  const [newCards, setCards] = useState(cards);

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  }

  return <button className='delete-button' onClick={() => deleteCard(id)}>
            Delete
         </button>
}

export default Button
