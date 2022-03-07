import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import backButton from "../assets/create_back_button.svg";
import profile from "../assets/profile.svg";

import "./create-page.scss";

class CreateDreamPage extends React.Component {
  render() {
    return (
      <div className="page create-dream-page">
        <div className="profile-button">
          <img src={profile} alt="profile-button" />
        </div>
        <Content />
        {/* <Footer /> */}
        {/* CREATE DREAM PAGE id={this.props.params.id} */}
      </div>
    );
  }
}

// Wrap the class component within a function component to use hooks
const CreateDreamPageWrapper = (props) => {
  const params = useParams();
  return <CreateDreamPage params={params} {...props} />;
};

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

const Content = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // get states and send to backend
  };

  return (
    <>
      {/* <div className="dream-date">January 28, 2022</div> */}
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        placeholder="日期"
        className="dream-date"
        onChange={(e) => setDate(e.target.value)}
      />
      <form className="form" onSubmit={handleSubmit}>
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
          <img
            src={backButton}
            alt="back-button"
            className="back-button"
            onClick={() => {
              window.history.back();
            }}
          />
          <div className="submit-button">
            <button type="submit" className="create-button">
              生 成 梦 境
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateDreamPageWrapper;
