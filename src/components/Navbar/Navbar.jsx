import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">JAMES</Link>
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <div />
          <Link to="/">Home</Link>
        </li>
        <li className="app__flex p-text">
          <div />
          <Link to="/about">About</Link>
        </li>
        <li className="app__flex p-text">
          <div />
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="app__flex p-text">
          <div />
          <Link to="/education">Education</Link>
        </li>
        <li className="app__flex p-text">
          <div />
          <Link to="/commission">Commission</Link>
        </li>
        <li className="app__flex p-text">
          <div />
          <Link to="/news">News</Link>
        </li>
        <li className="app__flex p-text">
          <div />
          <Link to="/store">Store</Link>
        </li>
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links-small">
              <li>
                <Link
                  to="/"
                  className="app__navbar-menu-link"
                  onClick={() => setToggle(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="app__navbar-menu-link"
                  onClick={() => setToggle(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="app__navbar-menu-link"
                  onClick={() => setToggle(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="app__navbar-menu-link"
                  onClick={() => setToggle(false)}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/commission"
                  className="app__navbar-menu-link"
                  onClick={() => setToggle(false)}
                >
                  Commission
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="app__navbar-menu-link"
                  onClick={() => setToggle(false)}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/store"
                  className="app__navbar-menu-link"
                  onClick={() => setToggle(false)}
                >
                  Store
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
