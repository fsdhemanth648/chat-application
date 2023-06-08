import React from 'react'

const SignUp = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='logo'>We Chat...</div>
        <div className='title'>Sign Up</div>
        <form>
          <input type='text' placeholder='Display name'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <input type='file'/>
          <button>Sign Up</button>
        </form>
        <p>Already have an account ? Login</p>
      </div>
    </div>
  )
}

export default SignUp
