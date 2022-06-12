import React from 'react'
import ReactDOM from 'react-dom'

import './Drawer.scss'

const drawerRoot = document.querySelector('#drawerRoot')

const Drawer = ({ className, side, width, children, toggleHide }) => {
  return ReactDOM.createPortal(
    <>
      <div
        style={{ width: width || '300px' }}
        className={`drawer 
                  ${side === 'left' ? 'drawer-left' : 'drawer-right'}
                  ${className || ''}`}
      >
        {children}
      </div>
      <div className="drawer-backdrop" onClick={toggleHide}></div>
    </>,
    drawerRoot
  )
}

export default Drawer
