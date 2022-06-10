import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import backButton from 'assets/ui/back_button.svg'
import Toggle from 'assets/ui/toggle_menu.svg'

import './navbar.scss'
import UserContext from 'stores/UserContext'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <img
      src={backButton}
      alt="back-button"
      className="back-button"
      onClick={() => navigate(-1)}
    />
  )
}

const NavBar = ({ title, back }) => {
  const userCtx = useContext(UserContext)

  return (
    <section className="nav">
      {back && <BackButton />}
      <h1 className="nav-text">{title}</h1>
      {userCtx.state.token ? (
        <img src={Toggle} alt="toggle-menu" className="toggle-menu" />
      ) : (
        <Link to="/login">Login</Link>
      )}
    </section>
  )
}

export default NavBar
