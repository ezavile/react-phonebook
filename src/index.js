import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'reset-css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* eslint react/jsx-filename-extension: 0 */
ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
