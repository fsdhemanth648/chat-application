import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className='navbar'>
        <div>
            <h4 className='brandLogo'>We Chat...</h4>
        </div>
        <div className='userProfile'>
            <img src={currentUser.photoURL} alt='userIcon'/>
            <span><b>{currentUser.displayName}</b></span>
            <button
              onClick={()=> signOut(auth)}
            >Logout</button>
         </div>
    </div>
  )
}

export default Navbar

