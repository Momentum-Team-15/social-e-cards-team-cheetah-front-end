import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ setAuth }) => {
    const [token, setToken] = useState([])

    const handleLogout = () => {
        axios
            .post('https://ecard-web-service.onrender.com/auth/token/logout/',
                {},
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                })
            .then(() => setAuth('', null))
            .catch(() => setAuth('', null))
    }

    return (
        <header>
            <Link
                className='button-1'
                onClick={handleLogout}
            >Log Out</Link>
            {/* <Link to="/create" path="" className='button-1'>Create a Card</Link> */}
            
        </header>
    )
}
