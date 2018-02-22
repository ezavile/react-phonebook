import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import firebase from 'firebase';
import Dialog from 'material-ui/Dialog';

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

  handleAuth = () => {
    this.setState({ isLoading: true });
    const gmailProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(gmailProvider)
      .then(snap => console.log(snap))
      .catch(err => {
        this.setState({
          isLoading: false,
          isDialogOpen: true,
          errorMessage: err.message,
        });
      });
  };

  closeDialog = () => {
    this.setState({ isDialogOpen: false, errorMessage: '' });
  };

  render() {
    return (
      <section className="Login">
        <CardImage
          image="https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96cc9609b49dbccd31188aef0c82cfb6&auto=format&fit=crop&w=1050&q=80"
          title="react-phonebook"
        />
        <div className="Login-google">
          <GoogleSvg />
          <RaisedButton
            label="Login"
            secondary={true}
            onClick={this.handleAuth}
          />
        </div>
        {this.state.isLoading ? (
          <div className="u-progress">
            <CircularProgress size={80} thickness={5} />
          </div>
        ) : null}
        <Dialog
          open={this.state.isDialogOpen}
          onRequestClose={this.closeDialog}
          actions={<RaisedButton label="Ok" onClick={this.closeDialog} />}
        >
          {this.state.errorMessage}
        </Dialog>
      </section>
    );
  }
}

export default Login;
