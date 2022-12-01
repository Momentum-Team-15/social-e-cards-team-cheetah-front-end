import axios from 'axios'
import { useState, useEffect } from 'react'

// TODO: Update endpoint for a list of all followed users (where their username will then link to a list of their cards)

export const MyFriends = ({token}) => {
    const [friends, setFriends] = useState([])
    const [selectedUserId, setSelectedUserId] = useState([])

    useEffect(() => {
        axios
            .get('https://ecard-web-service.onrender.com/friends/', {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then(res => {
                setFriends(res.data)
            })
    }, [token])

    return (
        <div className='friend-shelf'>
            <h1>My Friends</h1>
            {friends.map(friend => (
                <div className='friends-list'>
                    <p key="friend" className='friend'>{friend.friend}</p>
                </div>
                ))
            }
        </div>
            )
}
