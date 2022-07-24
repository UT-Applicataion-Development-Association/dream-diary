import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from 'stores/UserContext'

import MenuIcon from 'assets/ui/toggle_menu.svg'
import LoginIcon from 'assets/ui/login.svg'

import './DrawerMenu.scss'

const DrawerMenuItem = ({ icon, label, link }) => {
  return (
    <li>
      <div>
        <img src={icon} className="drawer-menu-item-icon" />
        <Link to={link}>{label}</Link>
      </div>
    </li>
  )
}

const DrawerMenu = ({ closeDrawer }) => {
  const userCtx = useContext(UserContext)

  const isLogin = userCtx.state.token
  const logoutUser = useCallback(() => {
    userCtx.dispatch({ type: 'CLEAR' })
  }, [])

  return (
    <div className="drawer-menu-container">
      <div className="menu-head">
        <img
          src={MenuIcon}
          alt="toggle-menu"
          className="toggle-menu nav-icon"
          onClick={closeDrawer}
        />
      </div>
      {isLogin ? (
        <>
          <div className="menu-section">
            <ul className="menu-list">
              <DrawerMenuItem icon={LoginIcon} label="首页" link="/" />
              <DrawerMenuItem icon={LoginIcon} label="热门推荐" link="/" />
              <DrawerMenuItem icon={LoginIcon} label="我的图库" link="/" />
              <DrawerMenuItem icon={LoginIcon} label="梦境收藏" link="/" />
            </ul>
          </div>
          <hr />
          <div className="menu-section">
            <ul className="menu-list">
              <DrawerMenuItem icon={LoginIcon} label="个人主页" link="/" />
            </ul>
          </div>
          <div className="menu-foot">
            <span onClick={logoutUser}>登出</span>
          </div>
        </>
      ) : (
        <div className="menu-section">
          <ul className="menu-list">
            <DrawerMenuItem icon={LoginIcon} label="登录" link="/login" />
          </ul>
        </div>
      )}
    </div>
  )
}

export default DrawerMenu
