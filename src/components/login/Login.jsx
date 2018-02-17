import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CardImage from '../card-image';
import GoogleSvg from '../google-svg';

import './login.css';

const Login = () => (
  <section className="Login">
    <CardImage
      bg="https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14704e761ba133f2fb71ec6a8e6e8e07&auto=format&fit=crop&w=1050&q=80"
      title="Welcome to react-phonebook!"
    />
    <div className="Login-google">
      <GoogleSvg />
      <RaisedButton label="Login" />
    </div>
  </section>
);

export default Login;
