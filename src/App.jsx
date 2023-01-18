import React,  { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import ChatArea from './components/Chatarea/ChatArea'
import './App.css'

function App() {
  const [sendId,setSendId]=useState()
  const getID=(id)=>{
    setSendId(id)
  }
  // console.log(id)
  return (
    <div className="app">
      <Sidebar setId={getID}/>
      <ChatArea id={sendId}/>
    </div>
  )
}

export default App
