import React, { useContext, useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import BackIcon from 'assets/ui/back_button.svg'
import MenuIcon from 'assets/ui/toggle_menu.svg'
import SearchIcon from 'assets/ui/search.svg'

import Drawer from 'components/UI/Drawer'

import UserContext from 'stores/UserContext'

import './NavBar.scss'
import DrawerMenu from 'components/DrawerMenu'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <img
      src={BackIcon}
      alt="back-button"
      className="nav-left back-button"
      onClick={() => navigate(-1)}
    />
  )
}

const NavBar = ({ title, back, search, cancel }) => {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <div className="nav">
      <img
        src={MenuIcon}
        alt="toggle-menu"
        className="toggle-menu nav-icon"
        onClick={() => setShowDrawer(true)}
      />

      {showDrawer && (
        <Drawer side="left" toggleHide={() => setShowDrawer(false)}>
          <DrawerMenu closeDrawer={() => setShowDrawer(false)} />
        </Drawer>
      )}

      {back && <BackButton />}

      <h1 className="nav-text">{title}</h1>

      {search && (
        <img
          src={SearchIcon}
          alt="search-button"
          className="toggle-search nav-icon"
        />
      )}
    </div>
  )
}

export default NavBar
