import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';
import { blue400, grey500 } from 'material-ui/styles/colors';

import './profileItem.css';

const ProfileItem = ({ title, icon, content }) => (
  <div className="Profile-information-item">
    <h3 className="Profile-information-item-title" style={{ color: blue400 }}>
      {title}
    </h3>
    <p className="Profile-information-item-content" style={{ color: grey500 }}>
      <FontIcon
        className="material-icons"
        color={grey500}
        style={{ fontSize: '18px', marginRight: '5px' }}
      >
        {icon || title.toLowerCase()}
      </FontIcon>
      {content}
    </p>
  </div>
);

ProfileItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  content: PropTypes.string.isRequired,
};

ProfileItem.defaultProps = {
  icon: '',
};

export default ProfileItem;
