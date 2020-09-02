import React from 'react'
import './css/Home.css';

function Home() {
    return (
        <div className="home">
           <div className="home__welcome">
               <h1>Welcome to my Wesbite</h1>
               <p>Here you can see who I am, what I do and what my goals are</p>
           </div>
           <div className="home__navs">
            <div className="home__nav">
                <h1>{'<Porftolio />'}</h1>
                <p> See what I've done, and what I'm working on actual days</p>
            </div>
           
           
            <div className="home__nav">
                <h1>{'<Roadmap />'} </h1>
                <p>Follow my steps into achieving my goals</p>
            </div>
           
           
            <div className="home__nav">
                <h1>{'<Know me />'}</h1>
                <p>Know more about me, what I love and Social Media's</p>
            </div>
           </div>
           <div className="home__feedback">
               <h1> Feel free to live me some tips, improvements or support</h1>
               
                   <div className="home__feedback__login">
                       <p>Login to leave me feecback and send it to me</p>
                       <button>Log in With a Google Account</button>
                   </div>
               
           </div>
        </div>
    )
}

export default Home
