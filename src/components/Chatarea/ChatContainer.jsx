import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import msgs from '../../data/messages'

export default function ChatContainer({id}) {
  const [allMsgs, setAllMsgs] = useState([])

  useEffect(() => {
    id && setAllMsgs(msgs[id-1])
  }, [id])

  function addMsg() {
    let newchat = document.getElementById("new-chat-input").value
    newchat && setAllMsgs(prevMsgs => [...prevMsgs, "r:" + newchat])
  }

  const chatElements = allMsgs.map(msg => {
    if (msg[0] === 's') {
      return (
        <div className="send">
        {msg.substring(2)}
      </div>
      )
    } else {
      return (
      <div className="receive">
        {msg.substring(2)}
      </div>
      )
    }
  })


  return (
    <>
      <div className="chatcontainer" id="chats">
        {chatElements}
      </div>
      <Footer id={id} addMsg={() => addMsg(id)} />
    </>
  )
}