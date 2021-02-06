import React from 'react';
import './App.css';
import Episodes from './components/BreakingBad/Episodes';
import Characters from './components/BreakingBad/Characters';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/login';
import Error from './components/Error';
import Home from './components/Home';
import MenuBar from './components/MenuBar';

import { Switch, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <MenuBar />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/episodes" component={Episodes} exact />
        <Route path="/characters" component={Characters} exact />
        <Route component={Error} />
      </Switch>  
    </div>
  );
}

export default App;
