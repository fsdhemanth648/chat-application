import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    }catch(err){
      setError(true)
    }
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='logo'>We Chat...</div>
        <div className='title'>Login</div>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>Login</button>
          {error && <div>Something went wrong...</div>}
        </form>
        <p>Don't have an account ? <Link to="/register">Sign Up </Link></p>
      </div>
    </div>
  )
}

export default Login
