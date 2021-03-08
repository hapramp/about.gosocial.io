import React from 'react';
import './App.css';
import Home from './components/Home';
import Creators from './components/Creators'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <main className="font-roboto">
      <Router>
      <Switch>
          <Route path="/creators">
            <Creators />
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
