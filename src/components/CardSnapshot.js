import { useState } from 'react'

export const CardSnapshot = ({ card, username }) => {
    const [isPublished, setIsPublished] = useState(card.published)
    
    // need a function to determine if card being viewed belongs to current user and thus should have a different published symbol


    return (
        <article className='sm-card-frame'>
            <h4 className='card-title'>{ card.title }</h4>
            <div className='card-snapshot'
                style={{
                    background: card.background_color,
                    border: `3px ${card.border_color} ${card.border_style}`,
                    textAlign: card.text_alignment,
                    color: card.font_color,
                    fontFamily: card.font_family}}>
                <div className='sm-card-front'>
                    <div className='outerMessage'>{card.outer_msg}</div>
                </div>
                <div className='sm-card-back'>
                    <div className='innerMessage'>{card.inner_msg}</div>
                </div>
            </div>
            <div className="deets">
                <>
                <div className="author">{`by ${card.user}`}</div>
                <div className="ispub">
                    {isPublished ? (
                        <p className='nopub'>Published</p>
                    ) : (
                        <p className='unpub'>Draft</p>
                    )}
                </div>
                </>
            </div>
            {/* </div> */}
        </article>
    )
}
