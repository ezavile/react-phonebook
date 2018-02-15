import React, { Component } from 'react';
import * as firebase from 'firebase';
import CircularProgress from 'material-ui/CircularProgress';
import { ContactProfile } from '../../components';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      contact: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    /* eslint react/prop-types: 0 */
    const db = firebase
      .database()
      .ref()
      .child('contacts')
      .orderByChild('id')
      .equalTo(this.props.match.params.id);

    db.on('child_added', snap => {
      const contact = snap.val();
      this.setState({ contact });
      this.setState({ isLoading: false });
    });
  }

  render() {
    const content = this.state.isLoading ? (
      <div className="u-progress">
        <CircularProgress size={80} thickness={5} />
      </div>
    ) : (
      <ContactProfile {...this.state.contact} />
    );
    return content;
  }
}

export default Profile;
