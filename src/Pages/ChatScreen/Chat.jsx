import React from 'react'
import style from 'styled-components'

function Chat() {
  return (
      <ChatBox></ChatBox>
  )
}

const ChatBox = style.div`
    background: red;
    width: 80%;
    height: 100px;
    top: 5px;
    display: flex;
`;

export default Chat
