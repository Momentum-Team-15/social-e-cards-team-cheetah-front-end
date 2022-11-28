import { useState } from 'react'
import { Link } from "react-router-dom"
import './card.css'

export const CardSnapshot = ({ key, card }) => {

    return (
        <article className='sm-card-frame'>
            <h3>{ card.title }</h3>
            <div
                className='card-snapshot'
                style={{
                    // backgroundColor: props.card.style.background_color,
                    border: `${card.border_style} ${card.border_color}`,

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
