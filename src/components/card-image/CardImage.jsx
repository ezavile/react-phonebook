import React from 'react';
import PropTypes from 'prop-types';
import './cardImage.css';

const CardImage = ({ image, title }) => (
  <div className="CardImage" style={{ backgroundImage: `url(${image})` }}>
    <h1 className="CardImage-title">{title}</h1>
  </div>
);

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardImage;
