import React from 'react'
import style from 'styled-components'

function Chat() {
  return (
      <ChatBox></ChatBox>
  )
}

const ChatBox = style.textarea`
    background: white;
    width: 80%;
    height: 5%;
    padding: 15px;
    border-left: 0.5px solid grey;
    border-radius: 50px;
    bottom: 15px;
    position: absolute;
    margin-left: 2%;
    margin-right: auto;
    box-shadow: 0 5px 10px 0 gray, 0 0 40px 0 gray;
    &:focus {
      outline: none;
    } 
`;

export default Chat
