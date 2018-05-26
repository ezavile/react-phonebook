import React from 'react';
import ReactDOM from 'react-dom';

import MyNameComponet from './MyNameComponent';

const app = document.createElement('div');
app.id = "app";
document.body.appendChild(app);

ReactDOM.render(
  React.createElement(MyNameComponet, { name: "Edgar" }, null),
  document.getElementById('app')
);