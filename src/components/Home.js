import React from 'react'
import './css/Home.css';
import Embed from 'react-embed';

function Home() {
    return (
        <div className="home">
            <div className="home__welcome">
                <div>
                    <h1>{'<Welcome To  '}</h1>
                    <h3>{'Productivity />'}</h3>
                </div>

                <div className="home__welcomeText">
                    <h1>{'<'}</h1>
                    <h4> Here's the product of years focused on growing my knwoledge
                        to become someone in Coding World. Want to see whats the path I'm following
                        and seek for some tips?<br></br>
                        You're in the rigt place ; {')'}</h4>
                    <h1>{' />'}</h1>
                </div>
                
            </div>
            <div className="home__embed">
            <Embed isDark url="https://twitter.com/Antonicarol1/status/1300177861572284417" />
           
            </div>
        </div>
    )
}

export default Home
