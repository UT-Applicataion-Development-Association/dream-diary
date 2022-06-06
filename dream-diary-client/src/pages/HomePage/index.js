import React from 'react'
import { Link } from 'react-router-dom'
import NewButton from '../assets/new_dream.svg'
import Dream4 from '../assets/dream4.svg'
import NavBar from '../../components/NavBar/index'

import './home-page.scss'

const placeholders = [
  { img: Dream4 },
  { img: Dream4 },
  { img: Dream4 },
  { img: Dream4 },
  { img: Dream4 },
  { img: Dream4 },
  { img: Dream4 },
  { img: Dream4 },
  { img: Dream4 },
  { img: Dream4 },
]

// const API_HOST = ENV.api_host
// const getDreamList = () => {
//   const request =  new Request(`/dreams`,{
//       method: "get"
//   })

//   fetch(request)
//   .then(data => {return data.json()})
//   .then(res => {})
//   .catch(error => {
//       console.log(error);
//   });
// }

class HomePage extends React.Component {
  render() {
    return (
      <div className="page home-page">
        <NavBar title={'梦 境 墙'} />
        <main className="home-main">
          {/* <div>
            <Link to="/dream/3">Link to ViewDream</Link>
          </div> */}
          <DreamFeed />
        </main>
        <Footer />
      </div>
    )
  }
}

// const NavBar = () => {
//   return (
//     <section className="home-nav">
//       <span className="nav-text">梦 境 墙</span>
//       <img src={Toggle} alt="toggle-menu" className="toggle-menu" />
//     </section>
//   );
// };

const Footer = () => {
  return (
    <section className="home-footer">
      <img src={NewButton} alt="new-button" className="new-button" />
    </section>
  )
}

const DreamFeed = () => {
  return (
    <section className="dream-feed">
      {placeholders.map((dream) => {
        return <Dream dream={dream}></Dream>
      })}
    </section>
  )
}

const Dream = (props) => {
  return <img src={props.dream.img} alt="dream-cover" className="dream" />
}

export default HomePage
