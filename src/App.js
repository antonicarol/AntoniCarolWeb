import React from 'react';
import './App.css';
import Header from './components/Header'
import Portfolio from './components/Portfolio/Portfolio';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import RoadMap from './components/RoadMap/RoadMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialMedia from './components/KnowMe/SocialMedia';

function App() {
  return (
    <div className="app">
      <Router>
       <Header />
      
          <Switch>
            <Route path='/portfolio'>
               <img className="background" src="https://i.gyazo.com/5154f3c792b6aaf336ff6b684a282919.png" alt="" />
              <Portfolio />
            </Route>
            <Route path='/roadmap'>
            <img className="background" src="https://i.gyazo.com/5154f3c792b6aaf336ff6b684a282919.png" alt="" />
              <RoadMap />
            </Route>
            <Route path='/socialmedia'>
            <img className="background__gif" src="https://i.gyazo.com/c30d772d5a85f61ddf7e7d9e70ee934f.gif" alt="" />
              <SocialMedia />
            </Route>
            
            <Route path='/'>
            <img  className="background" src="https://i.gyazo.com/5154f3c792b6aaf336ff6b684a282919.png" alt="" />
            <Home />
            </Route>

          </Switch>
       
       </Router>
    </div>
  );
}

export default App;
