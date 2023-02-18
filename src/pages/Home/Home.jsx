import React from "react";
import {
  Header,
  About,
  Gallery,
  Learn,
  Intro,
  Academy,
  Services,
  Instagram,
  MediaQuotes,
} from "./container";
import { Footer, SignUp } from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Gallery />
      <Learn />
      <Intro />
      <Academy />
      <Services />
      <Instagram />
      <MediaQuotes />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Home;
