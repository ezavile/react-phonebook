import React from 'react';
import PropTypes from 'prop-types';
import './cardImage.css';

const CardImage = ({ bg, title }) => (
  <div className="CardImage" style={{ backgroundImage: `url(${bg})` }}>
    <h1 className="CardImage-title">{title}</h1>
  </div>
);

CardImage.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardImage;
