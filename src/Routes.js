import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './components/calculator/Calculator';
import Home from './components/home/Home';
import Quote from './components/quote/Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Calculator" component={Calculator} />
      <Route exact path="/Quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
