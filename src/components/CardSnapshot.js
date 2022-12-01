import { useState } from 'react'

export const CardSnapshot = ({ card }) => {
    const [isPublished, setIsPublished] = useState(card.published)

    return (
        <article className='sm-card-frame'>
            <h4 className='card-title'>{ card.title }</h4>
            <div
                className='card-snapshot'
                style={{
                    background: card.background_color,
                    border: `${card.border_style} ${card.border_color}`,textAlignment: card.text_alignment,
                    fontColor: card.font_color,
                    fontFamily: card.font_family
                }}
                >
                <div className='sm-card-front'>
                    <div className='outerMessage'>{card.outer_msg}</div>
                </div>
                <div className='sm-card-back'>
                    <div className='innerMessage'>
                        {card.inner_msg}
                    </div>
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
