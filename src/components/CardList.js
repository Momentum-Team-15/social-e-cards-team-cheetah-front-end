import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardSnapshot } from './CardSnapshot'

export const CardList = (token, isLoggedIn) => {
  const [cards, setCards] = useState([])
  const [selectedCardId, setSelectedCardId] = useState(null)

  useEffect(() => {
    axios
      .get('https://ecard-web-service.onrender.com/cards/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(res => {
        setCards(res.cards)
      })
  }, [token])

  return (
    <div className='card-display'>
      {cards.map(card => (
        <div className='card-frame'>
          <h4 className='card-title'>{card.title}</h4>
        </div>
      ))}
    </div>
  )
}
