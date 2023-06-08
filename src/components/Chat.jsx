import React, { useState } from 'react'
import {HiOutlineVideoCamera} from 'react-icons/hi'
import {FiUserPlus, FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
import Modal from './Modals/Modal'


const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };


  
  
  return (
    <div className='chatBoard'>
      <div className='topBar'>
        <span>User</span>
        <div className='chatFeatures'>
            <HiOutlineVideoCamera className="large-icon" onClick={openModal}/>      
            <FiUserPlus className="large-icon" onClick={openModal}/>
            <FiMoreHorizontal className="large-icon" onClick={openModal}/>
            {isOpen && <Modal closeModal={closeModal}/>} 
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
