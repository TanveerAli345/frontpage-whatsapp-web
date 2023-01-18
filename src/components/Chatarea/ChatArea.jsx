import React from "react"
import ChatContainer from "./ChatContainer"
import Footer from "./Footer"
import Header from "./Header"


function ChatArea({id}) {
    return (
        <div className="chatarea">
            <Header id={id}/>
            <ChatContainer id={id}/>
            {/* <Footer  */}
        </div>
    )
}

export default ChatArea