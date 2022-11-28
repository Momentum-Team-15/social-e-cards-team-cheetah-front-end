import { useState } from 'react'
import { Link } from "react-router-dom"
import './card.css'

export const CardSnapshot = ({ cardId, token, setSelected }) => {
    const [card, setCard] = useState({})

    return (
        <article className='sm-card-frame'>
            <div
                className='card-snapshot'
                style={{
                    background_color: card.background_color,
                    border: `${card.border_width} ${card.border_color} ${card.border_style}`,
                }}
            >
                <div className='sm-card-front'>
                    <h2 className='outerMessage' style={{ color: card.font_color }}>
                        {card.outer_msg}
                    </h2>
                </div>
                <div className='sm-card-back'>
                    <h2 className='innerMessage' style={{ color: card.font_color }}>
                        {card.inner_msg}
                    </h2>
                </div>
            </div>
        </article>
    )
}
