import React, { useContext, useState } from 'react'
import {HiOutlineVideoCamera} from 'react-icons/hi'
import {FiUserPlus, FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'
import Modal from './Modals/Modal'
import { ChatContext } from '../context/ChatContext'


const Chat = () => {

    const {data} = useContext(ChatContext);

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
        <span>{data.user?.displayName}</span>
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
