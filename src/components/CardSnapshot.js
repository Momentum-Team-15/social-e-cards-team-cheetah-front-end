// import { Link } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'
import "./card.css"

export const CardSnapshot = ({ cardId, token, setSelected }) => {
  const [card, setCard] = useState({}) 

  useEffect(() => {
    axios
      .get(`https://ecard-web-service.onrender.com/card/${cardId}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(res => {
        setCard(res.card) //TODO: use actual endpoint/property
      })
  }, [token, cardId])

  return (
    <article className='card-frame'>
      <div 
        className='card-snapshot'
        style={{background_color: card.background_color, border:`${card.border_width} ${card.border_color} ${card.border_style}`}}
      >
        <div className='card-front'>
            <h2 className='outerMessage'style={{color: card.font_color}}
            >{card.outer_msg}</h2>
            
        </div>
        <div className='card-back'>
            <h2 className='innerMessage'style={{color: card.font_color}}
            >{card.inner_msg}</h2>
            
        </div>
      </div>
    </article>
  )
}
