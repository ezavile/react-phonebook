import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { blue900 } from 'material-ui/styles/colors';
import firebase from 'firebase';
import { Login, Contacts, ChatRoom, Profile } from './scenes/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        sessionStorage.removeItem('userEmail');
        sessionStorage.removeItem('userPhoto');
        this.props.history.push('/');
      } else {
        const { email, photoURL } = user;
        sessionStorage.setItem('userEmail', email);
        sessionStorage.setItem('userPhoto', photoURL);
      }
      this.setState({
        user,
      });
    });
  }

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        /* eslint react/prop-types: 0 */
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  handleChatRoom = () => {
    /* eslint react/prop-types: 0 */
    this.props.history.push('/chat-room');
  };

  render() {
    return (
      <main>
        {this.state.user ? (
          <AppBar
            title={this.state.user.displayName}
            style={{ backgroundColor: blue900 }}
            iconElementLeft={
              <Avatar src={this.state.user.photoURL} size={48} />
            }
            iconElementRight={
              <div>
                <IconButton onClick={this.handleChatRoom}>
                  <FontIcon color="white" className="material-icons">
                    message
                  </FontIcon>
                </IconButton>
                <IconButton onClick={this.handleLogout}>
                  <FontIcon color="white" className="material-icons">
                    exit_to_app
                  </FontIcon>
                </IconButton>
              </div>
            }
          />
        ) : null}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/chat-room" component={ChatRoom} />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
