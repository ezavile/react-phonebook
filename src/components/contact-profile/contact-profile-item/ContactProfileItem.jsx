import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';
import { blue400, grey500 } from 'material-ui/styles/colors';

import './contactProfileItem.css';

const ContactProfileItem = ({ title, icon, content }) => (
  <div className="ContactProfile-information-item">
    <h3 className="ContactProfile-information-item-title" style={{ color: blue400 }}>
      {title}
    </h3>
    <p className="ContactProfile-information-item-content" style={{ color: grey500 }}>
      <FontIcon className="material-icons" color={grey500} style={{ fontSize: '18px', marginRight: '5px' }}>
        {icon || title.toLowerCase()}
      </FontIcon>
      {content}
    </p>
  </div>
);

ContactProfileItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  content: PropTypes.string.isRequired,
};

ContactProfileItem.defaultProps = {
  icon: '',
};

export default ContactProfileItem;
