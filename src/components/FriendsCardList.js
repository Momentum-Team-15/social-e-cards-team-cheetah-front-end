import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardSnapshot } from './CardSnapshot'

// TODO: Update endpoint for a list of all cards for followed users
export const FriendsCardList = (token, isLoggedIn) => {
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
