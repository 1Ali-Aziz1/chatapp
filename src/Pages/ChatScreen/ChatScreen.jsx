import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import style from 'styled-components'

function ChatScreen() {
  return (
    <Container>
      <Sidebar/>
      <Chat/>
    </Container>
  )
}

const Container = style.div`
  
`

export default ChatScreen
