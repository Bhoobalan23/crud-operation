import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Home';
import HomeList from './HomeList';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/HomeList" component={HomeList}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
