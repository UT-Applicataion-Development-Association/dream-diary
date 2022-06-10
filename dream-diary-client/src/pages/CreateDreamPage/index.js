import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from 'components/NavBar/index'

import UserContext from 'stores/UserContext'

import './create-page.scss'

// const Footer = () => {
//   return (
//     <section className="create-footer">
//       <img src={backButton} alt="back-button" className="back-button" />
//       <button>
//         <span className="create-button-text">生 成 梦 境</span>
//       </button>
//     </section>
//   );
// };

const DreamEditor = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // get states and send to backend
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        placeholder="日期"
        className="dream-date"
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="text-container">
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="标题"
          className="create-dream-title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          id="description"
          name="description"
          value={description}
          placeholder="内容"
          className="create-dream-description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="create-dream-footer">
        <div className="submit-button">
          <button type="submit" className="create-button">
            生 成 梦 境
          </button>
        </div>
      </div>
    </form>
  )
}

const CreateDreamPage = (props) => {
  const navigate = useNavigate()
  const userCtx = useContext(UserContext)

  // If not logged-in, then return
  if (!userCtx.token) {
    navigate(-1)
  }

  return (
    <div className="page create-dream-page">
      <NavBar title={''} back />
      <DreamEditor />
      {/* <Footer /> */}
    </div>
  )
}

export default CreateDreamPage
