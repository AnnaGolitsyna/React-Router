import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Users from './components/Users/Users';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Navigation />
        <Route path="/users">
          {' '}
          <Users />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
