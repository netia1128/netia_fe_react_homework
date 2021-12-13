import React from 'react'

// const Card = () => {
//   const url = 'https://picsum.photos/seed/$card_1/800/800';
//   const header = generateCardText(1);
//   const details = generateCardText(6);;


//   const generateCardText = (length) => {
//     let text = ''
//     for (let i = length; i > 0; i--) {
//        text += `${Math.random().toString(36).substring(2, 15)} `;
//     }
//     return text;
//   }

//   return (
//     <article className='card'> 
//       <figure className='card-item' style={{ backgroundImage: url }}>
//       </figure>
//       <summary className='card-details card-item'>
//         <h5>${header}</h5>
//         <p>${details}</p>
//         {/* <p id="delete-${card.id}" style="color: darkred; text-decoration: underline" onClick="deleteCard(${card.id});"> Delete</p> */}
//       </summary> 
//     </article>
//   )
// }

// export default Card

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.name = {count: props.initialCount};
    this.id = id;
    this.name = `card_${id}`;
    this.imageUrl = `https://picsum.photos/seed/${this.name}/800/800`
    this.header = this.generateCardText(1);
    this.details = this.generateCardText(6);
  }

  generateCardText(length) {
    let text = ''
    for (let i = length; i > 0; i--) {
       text += `${Math.random().toString(36).substring(2, 15)} `;
    }
    return text;
  }

  render() {
    return (
      <article className='card'> 
        <figure className='card-item' style={{ backgroundImage: this.imageUrl }}>
        </figure>
        <summary className='card-details card-item'>
          <h5>${this.header}</h5>
          <p>${this.details}</p>
          {/* <p id="delete-${card.id}" style="color: darkred; text-decoration: underline" onClick="deleteCard(${card.id});"> Delete</p> */}
        </summary> 
      </article>
    )
  }
}
