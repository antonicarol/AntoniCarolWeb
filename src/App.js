import React from 'react';
import './App.css';
import Header from './components/Header'
import Portfolio from './components/Portfolio';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import RoadMap from './components/RoadMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="app">
      <Router>
       <Header />
          <Switch>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/roadmap'>
              <RoadMap />
            </Route>
            <Route path='/socialMedia'>
              <SocialMedia />
            </Route>
            <Route path='/'>
              <Home />
            </Route>

          </Switch>
       
       </Router>
    </div>
  );
}

export default App;
