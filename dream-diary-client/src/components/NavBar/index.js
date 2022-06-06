import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import backButton from 'assets/ui/back_button.svg'
import Toggle from 'assets/ui/toggle_menu.svg'

import './navbar.scss'

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
  return (
    <section className="nav">
      {back && <BackButton />}
      <span className="nav-text">{title}</span>
      <img src={Toggle} alt="toggle-menu" className="toggle-menu" />
    </section>
  )
}

export default NavBar
