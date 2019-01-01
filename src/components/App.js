import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/teachers" component={Teachers}></Route>
        <Route path="/courses" component={Courses}></Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;