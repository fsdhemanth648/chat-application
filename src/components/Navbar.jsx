import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h4>We Chat...</h4>
        </div>
        <div className='userProfile'>
            <img src='https://images.pexels.com/photos/12301369/pexels-photo-12301369.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='userIcon'/>
            <span>User</span>
            <button>Logout</button>
         </div>
    </div>
  )
}

export default Navbar

