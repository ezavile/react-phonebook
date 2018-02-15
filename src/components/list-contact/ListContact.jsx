import React from 'react';
import PropTypes from 'prop-types';

import CardContact from '../card-contact';

const ListContact = ({ handleClick, contacts }) => contacts.map(contact => <CardContact handleClick={handleClick} key={contact.id} {...contact} />);

ListContact.propTypes = {
  handleClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
    }),
  ),
};

export default ListContact;
