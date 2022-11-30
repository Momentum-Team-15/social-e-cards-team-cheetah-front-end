import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const CardDetail = ({ token, setSelected }) => {
    const [card, setCard] = useState({})
    const { cardId } = useParams()

    useEffect(() => {
        axios
            .get(`https://ecard-web-service.onrender.com/cards/${cardId}/`, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then(res => {
                setCard(res.card)
            })
    }, [token])

    return (
        <article className='lg-card-frame'>
            <div
                className='card-detail'
                style={{
                    background_color: card.background_color,
                    border: `${card.border_width} ${card.border_color} ${card.border_style}`,
                }}
            >
                <div className='lg-card-front'>
                    <h2 className='outerMessage' style={{ color: card.font_color }}>
                        {card.outer_msg}
                    </h2>
                </div>
                <div className='lg-card-back'>
                    <h2 className='innerMessage' style={{ color: card.font_color }}>
                        {card.inner_msg}
                    </h2>
                </div>
            </div>
        </article>
    )
}
