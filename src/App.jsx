import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Contacts } from './scenes/';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/contacts" component={Contacts} />
    </Switch>
  </main>
);

export default App;
