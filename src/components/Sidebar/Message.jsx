import React from 'react'
import msgs from "../../data/messages"

export default function Message({name,pic,send,sendData,id}) {
  return (
    <div className="message" onClick={()=>sendData(id)}>
        <img className="message--profile-pic" src={pic} alt="" />
        <div className="message--details">
            <div>
                <div className="message--details--name">
                    {name}
                </div>
                <div className="message--details--last-msg" id={id}>
                    {msgs[id-1][msgs[id-1].length-1].substring(2)}
                </div>
            </div>
        </div>
    </div>
  )
}