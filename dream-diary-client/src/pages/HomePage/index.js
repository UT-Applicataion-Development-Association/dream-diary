import React from 'react'
import { Link } from 'react-router-dom'

import Dream4 from '../assets/dream4.svg'
import NavBar from '../../components/NavBar/index'
import Footer from 'components/Footer'

import './home-page.scss'
import { useContext } from 'react'
import UserContext from 'stores/UserContext'

const placeholders = [
  { _id: 1, image: Dream4 },
  { _id: 2, image: Dream4 },
  { _id: 3, image: Dream4 },
  { _id: 4, image: Dream4 },
]

const DreamItem = ({ dream }) => {
  return (
    <Link to={`/dream/${dream._id}`}>
      <img src={dream.image} alt="dream-cover" className="dream" />
    </Link>
  )
}

const DreamFeed = React.memo((props) => {
  return (
    <section className="dream-feed">
      {props.dreams.map((dream) => {
        return <DreamItem key={dream._id} dream={dream}></DreamItem>
      })}
    </section>
  )
})

const HomePage = () => {
  const userCtx = useContext(UserContext)
  console.log('Login as', userCtx)

  return (
    <div className="page home-page">
      <NavBar title={'梦 境 墙'} />
      <main className="home-main">
        <DreamFeed dreams={placeholders} />
      </main>
      <Footer addButton />
    </div>
  )
}

export default HomePage
