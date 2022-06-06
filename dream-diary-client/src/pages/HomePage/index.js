import React from 'react'
import { Link } from 'react-router-dom'
import Dream4 from '../assets/dream4.svg'
import NavBar from '../../components/NavBar/index'
import Footer from 'components/Footer'

import './home-page.scss'

const placeholders = [
  { _id: 1, image: Dream4 },
  { _id: 2, image: Dream4 },
  { _id: 3, image: Dream4 },
  { _id: 4, image: Dream4 },
]

class HomePage extends React.Component {
  render() {
    return (
      <div className="page home-page">
        <NavBar title={'梦 境 墙'} />
        <main className="home-main">
          <DreamFeed />
        </main>
        <Footer addButton />
      </div>
    )
  }
}

const DreamFeed = () => {
  return (
    <section className="dream-feed">
      {placeholders.map((dream) => {
        return <DreamItem dream={dream}></DreamItem>
      })}
    </section>
  )
}

const DreamItem = ({ dream }) => {
  return (
    <Link to={`/dream/${dream._id}`}>
      <img src={dream.image} alt="dream-cover" className="dream" />
    </Link>
  )
}

export default HomePage
