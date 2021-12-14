const Button = ({id, deleteCard}) => {
  return <button className='delete-button' onClick={() => deleteCard(id)} >
            Delete
         </button>
}

export default Button