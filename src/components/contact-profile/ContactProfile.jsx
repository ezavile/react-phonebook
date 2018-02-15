import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { green900, blue400, yellow600, red400, grey800 } from 'material-ui/styles/colors';
import CardImage from '../card-image/CardImage';
import './contactProfile.css';
import ContactProfileItem from './contact-profile-item/ContactProfileItem';

const ContactProfile = ({ img, bg, name, nickname, group, phone, email, birthdate }) => (
  <section className="ContactProfile">
    <CardImage image={bg} title={`${name} | ${nickname}`} />
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
        ].map(icon => {
          const fontIcon = (
            <FontIcon className="material-icons" color={icon.color}>
              {icon.name}
            </FontIcon>
          );
          if (icon.name === 'phone') {
            return (
              <IconButton href={`tel:+${phone}`} key={icon.name}>
                {fontIcon}
              </IconButton>
            );
          }
          return <IconButton key={icon.name}>{fontIcon}</IconButton>;
        })}
      </div>
    </div>
    <div className="ContactProfile-information">
      <h2 className="ContactProfile-information-title" style={{ color: grey800 }}>
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
      ].map(item => <ContactProfileItem key={item.title} {...item} />)}
    </div>
  </section>
);

ContactProfile.propTypes = {
  img: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
};

export default ContactProfile;
