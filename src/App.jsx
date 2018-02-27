import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, Contacts, Profile } from './scenes';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/profile/:id" component={Profile} />
    </Switch>
  </main>
);

export default App;
