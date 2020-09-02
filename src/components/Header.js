import React from 'react'
import './css/Header.css'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
function Header() {

    return (
        <div className="header">
            <div className="header__logo">
                <Link style={{ textDecoration: 'none' }} to='/'>
                <img src={logo} alt="logo" />
                </Link>
               
            </div>
            <div className="header__tools">
                <h4>Built using</h4>
                <div>
                    <h4>React JS</h4>
                    <img alt="" src="https://api.iconify.design/vscode-icons:file-type-reactts.svg" />
                </div>
                <div>
                    <h4>Firebase</h4>
                    <img alt="" src="https://api.iconify.design/logos:firebase.svg" />
                </div>

            </div>
            <div className="header__navigation">
                <div className="header__navs">
                <div className="header__nav">
                <img alt="" src="https://api.iconify.design/zondicons:portfolio.svg?color=%234ecca3" />
                    <Link  to='/portfolio'>
                    <button className="header__nav--active">Portfolio</button>
                    </Link>      
                    </div>
                    <div className="header__nav">
                    <img alt="" src="https://api.iconify.design/raphael:roadmap.svg?color=%234ecca3" />
                    <Link  to='/roadMap'>
                        <button>RoadMap</button>
                        </Link>
                        </div>
                        <div className="header__nav">
                        <img alt="" src="https://api.iconify.design/bx:bxs-user-rectangle.svg?color=%234ecca3 " />
                    <Link  to='/socialmedia'>
                            <button>Know Me</button>
                    </Link>
                </div>  
                </div>
            </div>
        </div>
    )
}

export default Header
