import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
