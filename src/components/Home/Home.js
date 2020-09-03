import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";
import HomeWelcome from "./HomeWelcome";
import HomeLogin from "./HomeLogin";
import { useStateValue } from "../../contexts/StateProvider";

function Home() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="home">
      <HomeWelcome />
      <div className="home__navs">
        <div className="home__nav">
          <Link to="/portfolio">
            <h1>{"<Porftolio />"}</h1>
          </Link>
          <p> See what I've done, and what I'm working on</p>
        </div>

        <div className="home__nav">
          <Link to="/roadmap">
            <h1>{"<Roadmap />"} </h1>
          </Link>
          <p>Follow my steps into achieving my goals</p>
        </div>

        <div className="home__nav">
          <Link to="/socialmedia">
            <h1>{"<Know me />"}</h1>
          </Link>
          <p>Know more about me, and my Social Media</p>
        </div>
      </div>
      {!user && <HomeLogin />}
    </div>
  );
}

export default Home;
