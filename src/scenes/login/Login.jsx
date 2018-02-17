import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

import { CardImage, GoogleSvg } from '../../components';

import './login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isDialogOpen: false,
      errorMessage: '',
    };
  }

  componentWillMount() {
    if (sessionStorage.getItem('userEmail')) {
      this.props.history.push('/contacts');
    }
  }

  handleAuth = () => {
    this.setState({ isLoading: true });

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(snap => {
        const { email, photoURL } = snap.user;
        sessionStorage.setItem('userEmail', email);
        sessionStorage.setItem('userPhoto', photoURL);

        /* eslint react/prop-types: 0 */
        this.props.history.push('/contacts');
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          errorMessage: err.message,
          isDialogOpen: true,
        });
      });
  };

  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    const loadingComponent = (
      <div className="u-progress">
        <CircularProgress size={80} thickness={5} />
      </div>
    );
    return (
      <section className="Login">
        {this.state.isLoading ? loadingComponent : null}
        <CardImage
          bg="https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14704e761ba133f2fb71ec6a8e6e8e07&auto=format&fit=crop&w=1050&q=80"
          title="Welcome to react-phonebook!"
        />
        <div className="Login-google">
          <GoogleSvg />
          <RaisedButton label="Login" onClick={this.handleAuth} />
        </div>
        <Dialog
          actions={<RaisedButton label="Ok" onClick={this.closeDialog} />}
          modal={false}
          open={this.state.isDialogOpen}
          onRequestClose={this.closeDialog}
        >
          {this.state.errorMessage}
        </Dialog>
      </section>
    );
  }
}

export default withRouter(Login);
