import React from 'react';
import PropTypes from 'prop-types';
import './CoverImage.css';

const CoverImage = ({ image, title }) => (
  <div className="CoverImage" style={{ backgroundImage: `url(${image})` }}>
    <h1 className="CoverImage-title">{title}</h1>
  </div>
);

CoverImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CoverImage;
