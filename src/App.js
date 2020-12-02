import React from 'react';
import './App.css';
import Home from './components/Home';
import Contributors from './components/Contributors'
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
          <Route path="/contributors">
            <Contributors />
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
