import axios from 'axios'
import useLocalStorageState from 'use-local-storage-state'

export const Header = ({ setAuth }) => {
    const [token, setToken] = useLocalStorageState('token', null)

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
            <button
                className='button-1'
                onClick={handleLogout}
            >Log Out</button>
        </header>
    )
}
