import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

import 'reset-css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyAelZaz9TBwNglRr1_p1ZqgnAaz7pOyni8',
  authDomain: 'react-phonebook-2c83a.firebaseapp.com',
  databaseURL: 'https://react-phonebook-2c83a.firebaseio.com',
  projectId: 'react-phonebook-2c83a',
  storageBucket: 'react-phonebook-2c83a.appspot.com',
  messagingSenderId: '993794414277',
};
firebase.initializeApp(config);

/* eslint react/jsx-filename-extension: 0 */
ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
