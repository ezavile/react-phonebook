import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import {
  green900,
  blue400,
  yellow600,
  red400,
  grey800,
} from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';
import firebase from 'firebase';
import IconButton from 'material-ui/IconButton';

import ProfileItem from './profile-item';
import { CardImage } from '../../components';

import './profile.css';

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
    const {
      bg,
      img,
      name,
      nickname,
      phone,
      email,
      group,
      birthdate,
    } = this.state.contact;
    const content = this.state.isLoading ? (
      <div className="u-progress">
        <CircularProgress size={80} thickness={5} />
      </div>
    ) : (
      <section className="Profile">
        <CardImage bg={bg} title={`${name} | ${nickname}`} />
        <div className="Profile-header">
          <div
            className="Profile-img"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="Profile-icons">
            <IconButton className="Profile-icons-item" href={`tel:+${phone}`}>
              <FontIcon className="material-icons" color={green900}>
                phone
              </FontIcon>
            </IconButton>
            <FontIcon
              className="Profile-icons-item material-icons"
              color={blue400}
            >
              message
            </FontIcon>
            <FontIcon
              className="Profile-icons-item material-icons"
              color={red400}
            >
              place
            </FontIcon>
            <FontIcon
              className="Profile-icons-item material-icons"
              color={yellow600}
            >
              star
            </FontIcon>
          </div>
        </div>
        <div className="Profile-information">
          <h2 className="Profile-information-title" style={{ color: grey800 }}>
            Contact Information
          </h2>
          {[
            {
              title: 'Group',
              content: group,
            },
            {
              title: 'Phone',
              content: phone,
            },
            {
              title: 'Email',
              content: email,
            },
            {
              title: 'Birthdate',
              icon: 'card_giftcard',
              content: birthdate,
            },
          ].map(item => <ProfileItem key={item.title} {...item} />)}
        </div>
      </section>
    );

    return content;
  }
}

export default Profile;
