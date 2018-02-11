import React from 'react';
import PropTypes from 'prop-types';
import './cardContact.css';

const CardContact = ({ img, name, nickname, group }) => (
  <div className="CardContact">
    <div className="CardContact-img" style={{ backgroundImage: `url(${img})` }} />
    <h2 className="CardContact-name">{name}</h2>
    <h3 className="CardContact-nickname">{nickname}</h3>
    <span className="CardContact-group">{group}</span>
  </div>
);

CardContact.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
};

export default CardContact;
