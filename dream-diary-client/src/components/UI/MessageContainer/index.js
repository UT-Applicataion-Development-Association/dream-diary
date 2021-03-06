import React from 'react'
import { useEffect, useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import MessageContext from 'stores/MessageContext'
import Message from './Message'

import './MessageContainer.scss'

const messageContainerRoot = document.querySelector('#messageContainerRoot')

const MessageContainer = ({ className = '' }) => {
  const msgCtx = useContext(MessageContext)

  const popMessage = () => (id) => {
    setTimeout(() => {
      msgCtx.dispatch({ type: 'POP', payload: { id } })
    }, 1000)
  }

  return ReactDOM.createPortal(
    <div className={`message-container ${className}`}>
      {msgCtx.state.messages.map((msg, idx) => {
        return (
          <Message
            key={idx}
            content={msg.content}
            level={msg.level}
            duration={msg.duration || 2000}
            onFadeOut={popMessage(msg.id)}
          />
        )
      })}
    </div>,
    messageContainerRoot
  )
}

export default MessageContainer
