import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './views/common/Header';
import BasicSample from './views/BasicSample';
import ProfileSample from './views/ProfileSample';
import TacosSample from './views/TacosSample';
import Home from './views/Home';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/basicsample' component={BasicSample} />
          <Route exact path='/profilesample' component={ProfileSample} />
          <Route exact path='/tacossample' component={TacosSample} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
