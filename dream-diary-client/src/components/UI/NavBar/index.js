import React, { useContext, useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import backButton from 'assets/ui/back_button.svg'
import Toggle from 'assets/ui/toggle_menu.svg'

import Drawer from 'components/UI/Drawer'

import UserContext from 'stores/UserContext'

import './navbar.scss'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <img
      src={backButton}
      alt="back-button"
      className="nav-left back-button"
      onClick={() => navigate(-1)}
    />
  )
}

const NavBar = ({ title, back }) => {
  const userCtx = useContext(UserContext)

  const [showDrawer, setShowDrawer] = useState(false)

  const toggleShowDrawer = useCallback((show) => {
    setShowDrawer(show)
  }, [])

  return (
    <div className="nav">
      {back && <BackButton />}
      <h1 className="nav-text nav-left">{title}</h1>
      {userCtx.state.token ? (
        <>
          <img
            src={Toggle}
            alt="toggle-menu"
            className="toggle-menu nav-right"
            onClick={() => toggleShowDrawer(true)}
          />
          {showDrawer && (
            <Drawer side="right" toggleHide={() => toggleShowDrawer(false)}>
              Drawer
            </Drawer>
          )}
        </>
      ) : (
        <Link className="nav-right" to="/login">
          <button className="button">登录</button>
        </Link>
      )}
    </div>
  )
}

export default NavBar
