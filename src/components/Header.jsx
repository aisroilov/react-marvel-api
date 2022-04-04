import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/marvel-banner.jpg";

const Header = () => {
  return (
    <div className="img">
      <img src={banner} alt="banner"></img>
      <div className="header-text">
        <Link to="/">
          <span>MARVEL HEROES</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
