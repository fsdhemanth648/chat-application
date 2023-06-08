import React from 'react'
import {MdAttachFile} from 'react-icons/md'
import {BiImageAdd} from 'react-icons/bi'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something...'/>
      <div className='sendOptions'>
        <MdAttachFile className='largeIcon'/>
        <input type='file' style={{display: "none"}} id='file'/>
        <label htmlFor='file'>
            <BiImageAdd className='largeIcon'/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
