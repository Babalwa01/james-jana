import React from "react";
import { Navbar } from "../../../../components";
import Social from "./container/Social/Social";
import { images } from "../../../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div
      className="header app__header app__flex"
      style={{ backgroundImage: `url(${images.hero})` }}
    >
      <div className="header-navbar">
        <Navbar />
      </div>
      <div className="app__header-info">
        <h1 className="app__header-info-h1-small">
          JAMES <br className="app__header-info-break-space" />
          <span>JANAAAA</span>
        </h1>
        <p>
          STUNNING LIFE-LIKE PENCIL{" "}
          <br className="app__header-info-break-space" />
          PORTRAITS
        </p>
      </div>
      <div className="header-social">
        <Social />
      </div>
    </div>
  );
};

export default Header;
