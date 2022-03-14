import React from "react";
import { Link } from "react-router-dom";
import NewButton from "../assets/new_dream.svg";
import Dream4 from "../assets/dream4.svg";
import NavBar from "../../components/NavBar/index";

import * as actions from "actions/Home";

import "./home-page.scss";
import { Pagination } from "@mui/material";

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
];

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

  constructor(props) {
    super(props);
    this.state = {
      pagination: 0,
      dreams: []
    }
  }

  componentDidMount() {
    actions.getDreams(this, this.state.pagination)
  }

  render() {
    return (
      <div className="page home-page">
        <NavBar title={"梦 境 墙"} />
        <main className="home-main">
          {/* <div>
            <Link to="/dream/3">Link to ViewDream</Link>
          </div> */}
          <DreamFeed dreams={this.state.dreams} />
        </main>
        <Footer />
      </div>
    );
  }
}


const Footer = () => {
  return (
    <section className="home-footer">
      <img src={NewButton} alt="new-button" className="new-button" />
    </section>
  );
};


const DreamFeed = (props) => {
  return (
    <section className="dream-feed">
      {props.dreams.map((dream) => {
        return <Dream dream={dream}></Dream>;
      })}
    </section>
  );
};


const Dream = (props) => {
  return (
    <div className="dream">
      {/* <img src={props.dream.img} alt="dream-cover" className="dream-img" /> */}
      <h3>{props.dream.title}</h3>
    </div>
  )
};


export default HomePage;
