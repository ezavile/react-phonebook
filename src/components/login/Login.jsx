import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';

import GoogleSvg from '../google-svg';
import CardImage from '../card-image/CardImage';
import FriendsImage from './friends.jpeg';
import './login.css';

const handleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

const Login = () => (
  <section className="Login">
    <CardImage title="react-phonebook!" image={FriendsImage} />
    <div className="Login-google">
      <GoogleSvg />
      <RaisedButton label="Login" onClick={handleAuth} />
    </div>
  </section>
);

export default Login;
