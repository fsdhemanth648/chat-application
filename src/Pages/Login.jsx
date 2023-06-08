import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='logo'>We Chat...</div>
        <div className='title'>Login</div>
        <form>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>Login</button>
        </form>
        <p>Don't have an account ? Sign Up</p>
      </div>
    </div>
  )
}

export default Login