import React from 'react'
import ReactDOM from 'react-dom'

import './Backdrop.scss'

const backdropRoot = document.querySelector('#backdropRoot')

const Backdrop = ({ className, children }) => {
  return ReactDOM.createPortal(
    <div className={`backdrop ${className || ''}`}>{children}</div>,
    backdropRoot
  )
}

export default Backdrop
