import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const CardDetail = ({ token, setSelected }) => {
    const [card, setCard] = useState({})
    const { cardId } = useParams()
    const {isPublished, setIsPublished} = useState(card.published)

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
    }, [token, {cardId}])

    return (
        <article className='lg-card-frame'>
            <h4 className="card-title">{card.title}</h4>
            <div
                className='card-detail'
                style={{
                    background: card.background_color,
                    border: `${card.border_width} ${card.border_color} ${card.border_style}`,
                    textAlignment: card.textAlignment,
                    fontColor: card.fontColor,
                    fontFamily: card.fontFamily,
                }}
            >
                <div className='lg-card-front'>
                    <div className='outerMessage'>
                        {card.outer_msg}
                    </div>
                </div>
                <div className='lg-card-back'>
                    <h2 className='innerMessage'>{card.inner_msg}</h2>
                </div>
            </div>
            <div className="deets">
                <div className="author">{`by ${card.user}`}</div>
                <p className="pub">
                    {isPublished ? (
                        <p>Published</p>
                    ) : (
                        <p>Unpublished</p>
                    )}
                </p>
            </div>
        </article>
    )
}
