import React from "react";
import "./Social.scss";
import {
  BsYoutube,
  BsGithub,
  BsTwitter,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";

const Social = () => {
  return (
    <div className="social__links">
      <div>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <BsYoutube size={25} />
        </a>
      </div>
      <div>
        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
          <BsGithub size={25} />
        </a>
      </div>
      <div>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <BsTwitter size={25} />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <BsFacebook size={25} />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <BsInstagram size={25} />
        </a>
      </div>
    </div>
  );
};

export default Social;
