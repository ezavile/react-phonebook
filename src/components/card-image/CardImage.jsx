import React from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ image, title }) => (
  <div>
    <img alt={title} src={image} />
    <h2>{title}</h2>
  </div>
);

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardImage;
