import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './scenes/login';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </main>
);

export default App;
