import axios from 'axios'
import { useState } from 'react'

export const Register = () => {
    const [username, setUsername] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [error, setError] = useState (null)
    const [token, setToken] = useState ('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        axios
            .post('https://ecard-web-service.onrender.com/auth/users/',
                {
                    username, email, password
                })
                .then((res) => {
                    console.log(res.data)
                })
                .then(axios
                    .post('https://ecard-web-service.onrender.com/auth/token/login/',
                        {
                            username, password
                        }))
            .catch((error) => {
                setError(error.message)
            })    
    }


    return (
        <div>
            <div className='register-box'>
                <h4>Please register below.</h4>
                {error && <div className="error">{error}</div>}
                <form id="registration-form" onSubmit= {handleSubmit}>
                    <div className='field'>
                        <label htmlFor='username' className="label">Create a Username</label>
                        <input
                            id='username'
                            onChange={(e) => setUsername(e.target.value)}
                            className='input'
                            autoComplete='on'
                            type='text'
                            name='Username'
                            placeholder='Username' />
                    </div>
                    <div className='field'>
                        <label htmlFor='email' className="label">Enter your email.</label>
                        <input
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                            className='input'
                            autoComplete='off'
                            name='Email'
                            type='email'
                            placeholder='Email' />
                    </div>
                    <div className='field'>
                        <label htmlFor='password' className="label">Add a Password</label>
                        <input
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='input'
                            autoComplete='off'
                            type='password'
                            placeholder='Password' />
                    </div>
                    <div className='control'>
                        <button
                            className='button'
                        >Register</button>
                    </div>
                </form>
            </div>
        </div>
    )

}