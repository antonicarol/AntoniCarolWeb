import React from 'react'
import './css/SocialMedia.css'
import GithubContextProvider from '../contexts/GithubContext'
import GithubRepo from './GithubRepo'
import Embed from 'react-embed';
import InstagramEmbed from 'react-instagram-embed';


function SocialMedia() {
    return (
        <div className="socialMedia">
             <div className="socialMedia__social">
               <h2>Social Media</h2>
                <Embed isDark url="https://twitter.com/Antonicarol1/status/1300177861572284417" />
                

            <InstagramEmbed
                url="https://www.instagram.com/p/B0kxNBso04n/"
                maxWidth={320}
                hideCaption={true}
                containerTagName='div' 
                />
           </div>

           <div className="socialMedia__hobbies">
                <div className="socialMedia__hobbie">
                    <div className="socialMedia__hobbie__title">
                        <img src="https://api.iconify.design/emojione-v1:microphone.svg" alt="" />
                        <h2> I love Freestyling </h2>
                        <img src="https://api.iconify.design/emojione-v1:microphone.svg" alt="" />
                    </div>
                    <div className="socialMedia__hobbie__body">
                        <p>When I sing, I feel really good, but when I Freestyle,
                            create song from nowehere and dont save them anywhere,
                            I feel like I have superpowers!
                        </p>
                        <div className="socialMedia__hobbie__content">

                        </div>
                    </div>
                </div>
                <div className="socialMedia__hobbie">
                    <div className="socialMedia__hobbie__title">
                        <img src="https://api.iconify.design/maki:gaming-15.svg?color=gray" alt="" />
                        <h2> I'm a Gamer </h2>
                        <img src="https://api.iconify.design/maki:gaming-15.svg?color=gray" alt="" />
                    </div>
                    <div className="socialMedia__hobbie__body">
                        <p> Since I was a kid i was facinated with videogame consoles, and still
                            nowadays I'm that kind of a freak. I use videogames to take a cool break
                            from programming or working.
                        </p>
                        <div className="socialMedia__hobbie__content">

                        </div>
                    </div>
                </div>
                <div className="socialMedia__hobbie">
                    <div className="socialMedia__hobbie__title">
                        <img src="https://api.iconify.design/noto:kick-scooter.svg" alt="" />
                        <h2> I ride Scooters</h2>
                        <img src="https://api.iconify.design/noto:kick-scooter.svg" alt="" />
                    </div>
                    <div className="socialMedia__hobbie__body">
                        <p> Been riding them for more than 10 years now. When I ride them I feel
                            that I can reach every goal I purpose, they make me believe that I don't
                            don't need wings to fly!
                        </p>
                        <div className="socialMedia__hobbie__content">

                        </div>
                    </div>
                </div>
           </div>

           
          
           

            
           
        </div>
    )
}

export default SocialMedia
