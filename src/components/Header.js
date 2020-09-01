import React from 'react'
import './css/Header.css'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
function Header() {
    const navs = {
        portfolio : '<Portfolio />',
        roadmap : '<RoadMap />',
        socialMedia : '<Social Media     />',
        comingSoon : '<Coming soon.. />'
    }
    return (
        <div className="header">
            <div className="header__logo">
                <Link style={{ textDecoration: 'none' }} to='/'>
                <img src={logo} alt="logo" />
                </Link>
               
            </div>
            <div className="header__navigation">
                <div className="header__navs">
                    <Link  to='/portfolio'>
                        <button className="header__nav--active">{navs.portfolio}</button>
                    </Link>
                    <Link  to='/roadMap'>
                        <button>{navs.roadmap}</button>
                    </Link>
                    <Link  to='/socialMedia'>
                        <button>{navs.socialMedia}</button>
                    </Link>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Header
