import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardSnapshot } from './CardSnapshot'

// TODO: Update endpoint for a list referencing specific non-logged in user
export const TheirCardList = (token, isLoggedIn) => {
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
                setCards(res.data)
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
