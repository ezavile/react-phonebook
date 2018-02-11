import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import GoogleSvg from '../google-svg';
import CardImage from '../card-image/CardImage';
import FriendsImage from './friends.jpeg';
import './login.css';

const Login = () => (
  <section className="Login">
    <CardImage title="react-phonebook!" image={FriendsImage} />
    <div className="Login-google">
      <GoogleSvg />
      <RaisedButton label="Login" />
    </div>
  </section>
);

export default Login;
