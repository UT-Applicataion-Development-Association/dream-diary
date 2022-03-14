import React from "react";
import Toggle from "../../pages/assets/toggle_menu.svg";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = ({ title }) => {
  return (
    <section className="nav">
      <span className="nav-text">{title}</span>
      <img src={Toggle} alt="toggle-menu" className="toggle-menu" />
    </section>
  );
};

export default NavBar;
