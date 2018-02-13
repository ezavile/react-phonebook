import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { green900, blue400, yellow600, red400, grey800 } from 'material-ui/styles/colors';
import CardImage from '../card-image/CardImage';
import './contactProfile.css';
import ContactProfileItem from './contact-profile-item/ContactProfileItem';

const ContactProfile = ({ img, name, nickname }) => (
  <section className="ContactProfile">
    <CardImage img={img} image="https://images.unsplash.com/photo-1502764088999-001291e403de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa02d6fc7d1a70beff0f21d92cd922cf&auto=format&fit=crop&w=1541&q=80" title={`${name} | ${nickname}`} />
    <div className="ContactProfile-header">
      <div className="ContactProfile-img" style={{ backgroundImage: `url(${img})` }} />
      <div className="CardContact-icons">
        {[
          {
            name: 'phone',
            color: green900,
          },
          {
            name: 'message',
            color: blue400,
          },
          {
            name: 'place',
            color: red400,
          },
          {
            name: 'star',
            color: yellow600,
          },
        ].map(icon => (
          <IconButton key={icon.name}>
            <FontIcon className="material-icons" color={icon.color}>
              {icon.name}
            </FontIcon>
          </IconButton>
        ))}
      </div>
    </div>
    <div className="ContactProfile-information">
      <h2 className="ContactProfile-information-title" style={{ color: grey800 }}>
        Contact Information
      </h2>
      {[
        {
          title: 'Group',
          content: 'Firends',
        },
        {
          title: 'Phone',
          content: '(844) 356 14 65',
        },
        {
          title: 'Email',
          content: 'ezavile@gmail.com',
        },
        {
          title: 'Birthdate',
          icon: 'card_giftcard',
          content: '27/06/1993',
        },
      ].map(item => <ContactProfileItem key={item.title} {...item} />)}
    </div>
  </section>
);

ContactProfile.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ContactProfile;
