export const Login = ({ setLogin }) => {
  return (
    <div>
      <div className='login-box'>
        <div className='field'>
          <input className='input' type='email' placeholder='Email' />
        </div>
        <div className='field'>
          <input className='input' type='password' placeholder='Password' />
        </div>
        <div className='field'>
          <p className='control'>
            <button
              className='button'
              onClick={() => {
                setLogin(true)
              }}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
