import React from 'react'
import { Link } from 'react-router-dom'

import AddButton from 'assets/ui/new_dream.svg'
import './Footer.scss'

const Footer = ({ addButton, postButton }) => {
  return (
    <section className="footer">
      {addButton && (
        <Link to={`/new-dream`}>
          <img src={AddButton} alt="New Dream" className="add-button" />
        </Link>
      )}
      {postButton && (
        <div className="submit-button">
          <button type="submit" className="create-button">
            生 成 梦 境
          </button>
        </div>
      )}
    </section>
  )
}

export default Footer
