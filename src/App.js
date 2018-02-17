import React, { Component } from 'react';
import { blue900 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { withRouter, Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';
import { Login, Contacts, Profile } from './scenes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        sessionStorage.removeItem('userEmail');
        this.props.history.push('/');
      } else {
        sessionStorage.setItem('userEmail', user.email);
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

  render() {
    return (
      <main>
        {this.state.user ? (
          <AppBar
            title={this.state.user.displayName}
            style={{ backgroundColor: blue900 }}
            iconElementLeft={<Avatar src={this.state.user.photoURL} size={48} />}
            iconElementRight={
              <IconButton onClick={this.handleLogout}>
                <FontIcon className="material-icons">exit_to_app</FontIcon>
              </IconButton>
            }
          />
        ) : null}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
