import axios from 'axios'
import { useState } from 'react'

export const Register = () => {
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [error, setError] = useState (null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        axios
            .post('https://ecard-web-service.onrender.com/auth/users/',
                {
                    username, password
                })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <div>
            <div className='register-box'>
                <h4></h4>
                {error && <div className="error">{error}</div>}
                <form id="registration-form" onSubmit={handleSubmit}>
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
                        >Register</button>
                    </div>
                </form>
            </div>
        </div>
    )

}