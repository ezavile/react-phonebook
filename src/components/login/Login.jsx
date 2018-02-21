import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import CardImage from '../card-image';
import GoogleSvg from '../google-svg';

import './login.css';

const Login = () => (
  <section className="Login">
    <CardImage
      image="https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96cc9609b49dbccd31188aef0c82cfb6&auto=format&fit=crop&w=1050&q=80"
      title="react-phonebook"
    />
    <div className="Login-google">
      <GoogleSvg />
      <RaisedButton label="Login" secondary={true} />
    </div>
  </section>
);

export default Login;
