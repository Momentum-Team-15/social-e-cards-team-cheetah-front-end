import axios from 'axios'
import { useState } from 'react'

export const Login = ({ setAuth, isLoggedIn }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        axios
            .post('https://ecard-web-service.onrender.com/auth/token/login',
                {
                    username, password
                })
            .then((res) => {
                const token = res.data.auth_token
                setAuth(username, token)
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    // if (isLoggedIn) {
    //   return <Navigate to="/cards"/>
    // }

    return (
        <div>
            <div className='login-box'>
                <h3>Please log in below.</h3>
                {error && <div className="error">{error}</div>}
                <form id="login-form" onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor='username' className="label">Username</label>
                        <input
                            id='username'
                            onChange={(e) => setUsername(e.target.value)}
                            className='input'
                            type='text'
                            name='Username'
                            placeholder='Username' />
                    </div>
                    <div className='field'>
                        <label htmlFor='password' className="label">Password</label>
                        <input
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='input'
                            type='password'
                            placeholder='Password' />
                    </div>
                    <div className='control'>
                        <button
                            className='button'
                        >Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
