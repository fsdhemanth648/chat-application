import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
      <div style={{
        backgroundColor: "#EFF99C",
        textAlign: "center",
        marginTop: 0,
        height:"45px",
        display: "flex",
        flexDirection:"column",
      }}>
        <span>Powered by</span>
        <span style={{
          fontSize: "16px",
          fontWeight:"bold",
        }}>SHB</span>
        
      </div>
    </div>
  )
}

export default Sidebar
