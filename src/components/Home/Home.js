import React from 'react'
import './css/Home.css';
import { Link } from 'react-router-dom';
import HomeWelcome from './HomeWelcome';

function Home() {
    return (
        <div className="home">
            <HomeWelcome />
           <div className="home__navs">
            <div className="home__nav">
                <Link to="/portfolio">
                    <h1>{'<Porftolio />'}</h1>
                </Link>
                <p> See what I've done, and what I'm working on</p>
            </div>
           
           
            <div className="home__nav">
                <Link to="/roadmap">
                <h1>{'<Roadmap />'} </h1>
                </Link>
                <p>Follow my steps into achieving my goals</p>
            </div>
           
           
            <div className="home__nav">
                <Link to="/socialmedia">
                <h1>{'<Know me />'}</h1>
                </Link>
                <p>Know more about me, and my Social Media</p>
            </div>
           </div>
           <div className="home__feedback">
               <h1> Feel free to leave some tips, improvements or support</h1>
               
                   <div className="home__feedback__login">
                       <p>Login to leave me feecback and send it to me</p>
                       <div className="home__feedback__loginButton">
                           <img src="https://api.iconify.design/flat-color-icons:google.svg" alt=""/>
                           <button>Log in With a Google Account</button>
                       </div>
                       
                   </div>
               
           </div>
        </div>
    )
}

export default Home
