import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardSnapshot } from './CardSnapshot'

// TODO: Confirm endpoint
export const MyCardList = ({token}) => {
    const [cards, setCards] = useState([])
    const [selectedCardId, setSelectedCardId] = useState(null)

    useEffect(() => {
        axios
            .get('https://ecard-web-service.onrender.com/cards/user', {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then(res => {
                setCards(res.data)
            })
    }, [token])

    return (
        
        <>
        <h1>My Cards</h1>
        <div className='card-shelf'>
            {cards.map(card => (
                <section>
                    <CardSnapshot key={card.id} card={card}/>
                </section>
                ))
            }
        </div>
        </>
            )
}
