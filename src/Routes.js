import React from 'react';
import { Router, Route, Link } from 'react-router';
import Home from './containers/Home';
import Login from './containers/Login';

export default (
  <div>
    <Route path='/' exact component={Home}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
)