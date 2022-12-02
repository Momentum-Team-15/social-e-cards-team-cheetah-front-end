import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardSnapshot } from './CardSnapshot'

export const CardList = ({token, isLoggedIn}) => {
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
                setCards(res.data)
            })
    }, [token])

    return (
        <>
        <h1>Choices abound...</h1>
        <div className='card-shelf'>
            {cards.map(card => (
                <section>
                    <CardSnapshot key={card.id} card={card} />
                </section>
                ))
            }
        </div>
        </>
    )
}
