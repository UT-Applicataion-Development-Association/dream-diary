import React, { useEffect, useRef, useState } from 'react'
import './Message.scss'

const Message = ({ content, level, duration, onFadeOut }) => {
  const ref = useRef(null)
  // Fade out after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      // Disappear
      ref.current.className += ' fade-out'
      onFadeOut && onFadeOut()
    }, duration)
    return () => clearTimeout(timer)
  }, [ref])

  return (
    <div ref={ref} className="message-box">
      <span className={level}>{content}</span>
      <button
        className="message-close-btn"
        onClick={() => {
          // Force close
          ref.current.className += ' fade-out'
          onFadeOut && onFadeOut()
        }}
      >
        {/* TODO: add a close icon */}❌
      </button>
    </div>
  )
}

export default React.memo(Message)
