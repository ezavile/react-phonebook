import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'reset-css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
