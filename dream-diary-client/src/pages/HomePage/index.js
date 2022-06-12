import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import NavBar from 'components/UI/NavBar'
import Footer from 'components/UI/Footer'

import './home-page.scss'
import { useContext } from 'react'
import UserContext from 'stores/UserContext'

import { mockDreams } from 'assets/mock/dreams'

const DreamItem = ({ dream }) => {
  return (
    <Link to={`/dream/${dream._id}`}>
      <div className="dream-item">
        <img src={dream.image} alt="dream-cover" className="dream-img" />
      </div>
    </Link>
  )
}

const DreamFeed = React.memo(({ dreams }) => {
  return (
    <section className="dream-feed">
      {dreams.map((dream) => {
        return <DreamItem key={dream._id} dream={dream}></DreamItem>
      })}
    </section>
  )
})

const HomePage = () => {
  const userCtx = useContext(UserContext)
  console.log('Login as', userCtx)

  const [dreamLists, setDreamLists] = useState([])

  useEffect(() => {
    // Load Dreams from server

    return () => {
      // Clean up
    }
  }, [])

  return (
    <div className="page home-page">
      <NavBar title={'梦境墙'} />
      <main className="home-main">
        {dreamLists.map((dreamList, i) => (
          <DreamFeed key={i} dreams={dreamList} />
        ))}

        <DreamFeed dreams={mockDreams} />
      </main>
      <Footer addButton />
    </div>
  )
}

export default HomePage
