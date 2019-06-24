import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MuscleMap from './MuscleMap';

import './App.css';

const Home: React.FC = () => {
  return <div>Etusivu</div>;
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Etusivu</Link></li>
            <li><Link to="/muscles">Lihakset</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/muscles" component={MuscleMap} />
      </div>
    </Router>
  );
}

export default App;
