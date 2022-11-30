import { useState } from 'react'
import { Link } from "react-router-dom"

export const CardSnapshot = ({ card }) => {

    return (
        <article className='sm-card-frame'>
            <h4 className='card-title'>{ card.title }</h4>
            <div
                className='card-snapshot'
                style={{
                    background: card.background_color,
                    border: `${card.border_style} ${card.border_color}`,textAlign: card.text_alignment

                }}
                >
                <div className='sm-card-front'>
                    <p className='outerMessage' style={{ 
                        color: card.font_color,
                        background: card.background_color
                    }}>
                        {card.outer_msg}
                    </p>
                </div>
                <div className='sm-card-back'>
                    <p className='innerMessage' style={{ color: card.font_color }}>
                        {card.inner_msg}
                    </p>
                </div>
            </div>
            <div className="author">{`by ${card.user}`}</div>
        </article>
    )
}
