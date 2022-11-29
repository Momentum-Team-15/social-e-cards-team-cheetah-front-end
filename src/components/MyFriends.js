import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardSnapshot } from './CardSnapshot'

// TODO: Update endpoint for a list of all followed users (where their username will then link to a list of their cards)

export const MyFriends = (token, isLoggedIn) => {
    const [cards, setCards] = useState([])
    const [selectedUserId, setSelectedUserId] = useState([])

    useEffect(() => {
        axios
            .get('https://ecard-web-service.onrender.com/cards/user', {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then(res => {
                setCards(res.cards)
            })
    }, [token])

    return (
        <div className='card-shelf'>
            {cards.map(card => (
                <section>
                    <CardSnapshot key={card.id} card={card}/>
                </section>
                ))
            }
        </div>
            )
}
