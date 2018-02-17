import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';
import CircularProgress from 'material-ui/CircularProgress';
import { withRouter } from 'react-router-dom';

import { GoogleSvg, CardImage } from '../../components';
import FriendsImage from './friends.jpeg';
import './login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isDialogOpen: false,
      errorMessage: null,
    };
  }

  componentWillMount() {
    if (sessionStorage.getItem('userEmail')) {
      this.props.history.push('/contacts');
    }
  }

  handleDialogOpen = () => {
    this.setState({ isDialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ isDialogOpen: false });
  };

  handleAuth = () => {
    this.setState({ isLoading: true });
    const provider = new firebase.auth.GoogleAuthProvider();

    /* eslint react/prop-types: 0 */
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(snap => {
        const { email, photoURL } = snap.user;
        sessionStorage.setItem('userEmail', email);
        sessionStorage.setItem('userPhoto', photoURL);
        this.props.history.push('/contacts');
      })
      .catch(err => {
        this.setState({ isLoading: false });
        this.handleDialogOpen();
        this.setState({ errorMessage: err.message });
      });
  };

  render() {
    const action = <FlatButton label="OK" onClick={this.handleDialogClose} />;
    const isLoading = this.state.isLoading ? (
      <div className="u-progress">
        <CircularProgress size={80} thickness={5} />
      </div>
    ) : null;
    return (
      <section className="Login">
        {isLoading}
        <CardImage title="react-phonebook!" image={FriendsImage} />
        <div className="Login-google">
          <GoogleSvg />
          <RaisedButton label="Login" onClick={this.handleAuth} />
          <Dialog actions={action} modal={false} open={this.state.isDialogOpen} onRequestClose={this.handleDialogClose}>
            {this.state.errorMessage}
          </Dialog>
        </div>
      </section>
    );
  }
}

export default withRouter(Login);
