import axios from 'axios'
import { useState } from 'react'
import { Register } from './Register'
import { Link } from 'react-router-dom'

export const Login = ({ setAuth, isLoggedIn }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)
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
            {register===false ? (
            <div className='login-box'>
                <h3>Please log in below.</h3>
                {error && <div className="error">{error}</div>}
                <form id="login-form" onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor='my-username' className="label">Username</label>
                        <input
                            id='my-username'
                            onChange={(e) => setUsername(e.target.value)}
                            className='input'
                            autoComplete='off'
                            type='text'
                            name='My Username'
                            placeholder='My Username' />
                    </div>
                    <div className='field'>
                        <label htmlFor='my-password' className="label">Password</label>
                        <input
                            id='my-password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='input'
                            autoComplete='off'
                            type='password'
                            placeholder='My Password' />
                    </div>
                    <div className='control'>
                        <button
                            className='button'
                        >Login</button>
                    </div>
                    <div id="register">
                    <h3>Or if you are first time visitor, please
                                <Link to="/register" onClick={()=> setRegister(!register)}> register.</Link></h3>
                    </div>
                </form>
            </div>
            ) : (
                <Register />
            )}
        </div>
    )
}
