import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AddExercise from './AddExercise';
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
            <li><Link to="/add-exercise">Lisää liike</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/muscles" component={MuscleMap} />
        <Route path="/add-exercise" component={AddExercise} />
      </div>
    </Router>
  );
}

export default App;
