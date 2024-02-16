import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import style from 'styled-components'

function ChatScreen() {
  return (
    <Container>
      <Sidebar/>
      <ChatBoxContainer>
      <Chat/>
      </ChatBoxContainer>
    </Container>
  )
}

const Container = style.div`
  display: flex;
`

const ChatBoxContainer = style.div`
  justify-content: center;
`

export default ChatScreen
