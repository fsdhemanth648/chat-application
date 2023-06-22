import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='home'>
      <div style={{
        display: "flex",
        flexDirection: "column",
      }}>
        Powered by
        <b>S.HEMANTH BABU</b>
      </div>
      <div className='container'>
        <Sidebar/>
        <Chat/>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
      }}>
        Powered by
        <b>S.HEMANTH BABU</b>
      </div>
    </div>
  )
}

export default Home
