import React from 'react'

const Card = ( {id = 1, key = 1} ) => {
  const imageUrl = `https://picsum.photos/seed/card_${id}/800/800`;
  const header = generateCardText(1);
  const details = generateCardText(2);

  
  return (
    <article className='card'> 
      <figure className='card-item' style={{ backgroundImage: `url(${imageUrl})` }}>
      </figure>
      <summary className='card-details card-item'>
        <h5>{header}</h5>
        <p>{details}</p>
      </summary> 
    </article>
  )
}

const generateCardText = (length) => {
  let text = ''
  for (let i = length; i > 0; i--) {
     text += `${Math.random().toString(36).substring(2, 15)} `;
  }
  return text;
}

export default Card;

