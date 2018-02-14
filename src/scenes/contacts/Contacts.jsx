import React, { Component } from 'react';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';

import { ListContact } from '../../components';

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
      .ref()
      .child('contacts');
    db.on('value', snap => {
      const contacts = snap.val();
      this.setState({ contacts });
      this.setState({ contactsFiltered: contacts });
    });
  }

  handleSearch = (event, newValue) => {
    const contactsFiltered = this.state.contacts.filter(contact => contact.name.includes(newValue) || contact.nickname.includes(newValue));
    this.setState({ contactsFiltered });
  };

  render() {
    return (
      <section className="Contacts">
        <div className="Contacts-search">
          <TextField floatingLabelText="Search a contact" floatingLabelStyle={{ color: 'white' }} inputStyle={{ color: 'white' }} onChange={this.handleSearch} fullWidth={true} />
        </div>
        <ListContact contacts={this.state.contactsFiltered} />
      </section>
    );
  }
}

export default Contacts;
