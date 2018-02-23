import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import firebase from 'firebase';

import 'reset-css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyCTYiKi7Mr7Yc8NXuZKawajWUdwBYvqEUA',
  authDomain: 'react-phonebook-b7c94.firebaseapp.com',
  databaseURL: 'https://react-phonebook-b7c94.firebaseio.com',
  projectId: 'react-phonebook-b7c94',
  storageBucket: 'react-phonebook-b7c94.appspot.com',
  messagingSenderId: '481880606318',
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
