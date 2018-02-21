import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'reset-css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
