import React, { Component } from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router-dom';

import { CardContact, AddContact } from '../../components';

import './contacts.css';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      contactsFiltered: [],
    };
  }

  componentDidMount() {
    const db = firebase
      .database()
      .ref('contacts')
      .orderByChild('userId')
      .equalTo(sessionStorage.getItem('userEmail'));

    db.on('value', snap => {
      let contacts = snap.val();
      contacts = Object.values(contacts);

      this.setState({ contacts, contactsFiltered: contacts });
    });
  }

  handleSearch = (event, value) => {
    const valueLowerCase = value.toLowerCase();

    const contactsFiltered = this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(valueLowerCase) ||
        contact.nickname.toLowerCase().includes(valueLowerCase),
    );

    this.setState({ contactsFiltered });
  };

  goToProfile = id => () => {
    /* eslint react/prop-types: 0 */

    this.props.history.push(`/profile/${id}`);
  };

  render() {
    const listCards = this.state.contactsFiltered.map(contact => (
      <CardContact
        key={contact.id}
        {...contact}
        handleClick={this.goToProfile(contact.id)}
      />
    ));
    return (
      <section className="Contacts">
        <div className="Contacts-search">
          <TextField
            floatingLabelText="Search a contact"
            floatingLabelStyle={{ color: 'white' }}
            inputStyle={{ color: 'white' }}
            fullWidth={true}
            onChange={this.handleSearch}
          />
        </div>
        {listCards}
        <AddContact />
      </section>
    );
  }
}

export default withRouter(Contacts);
