import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { green900, blue400, yellow600, red400, grey500, grey800 } from 'material-ui/styles/colors';
import CardImage from '../card-image/CardImage';
import './contactProfile.css';

const ContactProfile = ({ img, name, nickname }) => (
  <section className="ContactProfile">
    <CardImage img={img} image="https://images.unsplash.com/photo-1502764088999-001291e403de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa02d6fc7d1a70beff0f21d92cd922cf&auto=format&fit=crop&w=1541&q=80" title={`${name} | ${nickname}`} />
    <div className="ContactProfile-header">
      <div className="ContactProfile-img" style={{ backgroundImage: `url(${img})` }} />
      {/* TODO - refactor this part */}
      <div className="CardContact-icons">
        <IconButton>
          <FontIcon className="material-icons" color={green900}>
            phone
          </FontIcon>
        </IconButton>
        <IconButton>
          <FontIcon className="material-icons" color={blue400}>
            message
          </FontIcon>
        </IconButton>
        <IconButton>
          <FontIcon className="material-icons" color={red400}>
            place
          </FontIcon>
        </IconButton>
        <IconButton>
          <FontIcon className="material-icons" color={yellow600}>
            star
          </FontIcon>
        </IconButton>
      </div>
    </div>
    <div className="ContactProfile-information">
      <h2 className="ContactProfile-information-title" style={{ color: grey800 }}>
        Contact Information
      </h2>
      <div className="ContactProfile-information-item">
        <h3 className="ContactProfile-information-item-title" style={{ color: blue400 }}>
          Group
        </h3>
        <p className="ContactProfile-information-item-content" style={{ color: grey500 }}>
          <FontIcon className="material-icons" color={grey500} style={{ fontSize: '18px', marginRight: '5px' }}>
            people
          </FontIcon>
          Friends
        </p>
      </div>
      <div className="ContactProfile-information-item">
        <h3 className="ContactProfile-information-item-title" style={{ color: blue400 }}>
          Phone
        </h3>
        <p className="ContactProfile-information-item-content" style={{ color: grey500 }}>
          <FontIcon className="material-icons" color={grey500} style={{ fontSize: '18px', marginRight: '5px' }}>
            phone
          </FontIcon>
          (844) 356 14 65
        </p>
      </div>
      <div className="ContactProfile-information-item">
        <h3 className="ContactProfile-information-item-title" style={{ color: blue400 }}>
          Email
        </h3>
        <p className="ContactProfile-information-item-content" style={{ color: grey500 }}>
          <FontIcon className="material-icons" color={grey500} style={{ fontSize: '18px', marginRight: '5px' }}>
            email
          </FontIcon>
          ezavile@gmail.com
        </p>
      </div>
      <div className="ContactProfile-information-item">
        <h3 className="ContactProfile-information-item-title" style={{ color: blue400 }}>
          Birthdate
        </h3>
        <p className="ContactProfile-information-item-content" style={{ color: grey500 }}>
          <FontIcon className="material-icons" color={grey500} style={{ fontSize: '18px', marginRight: '5px' }}>
            card_giftcard
          </FontIcon>
          27/06/1993
        </p>
      </div>
    </div>
  </section>
);

ContactProfile.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ContactProfile;
