import React from 'react';
import style from 'styled-components';
import send from "./Assets/Images/Send.png";

function Chat() {
  return (
    <ChatBoxContainer>
        <SendButton>
          <img style={imageStyle} src={send} alt="Send" />
        </SendButton>
      <ChatBox>
      </ChatBox>
    </ChatBoxContainer>
  )
}

const ChatBoxContainer = style.div`
bottom: 15px;
position: absolute;
width: 80%;
height: 5%;
margin-left: 2%;
margin-right: auto;
display: flex;
`

const imageStyle = {
  "width": "25%",
  "height": "90%",
}

const ChatBox = style.textarea`
background: white;
width: 100%;
padding: 15px;
border-left: 0.5px solid grey;
border-radius: 50px;
bottom: 15px;
position: absolute;
box-shadow: 0 5px 10px 0 gray, 0 0 40px 0 gray;
&:focus {
  outline: none;
} 
`;

const SendButton = style.button`
border: none;
background: black;
z-index: 10px;
"position": "sticky",
"background": "black",
"bottom": "50%"
`;

export default Chat
