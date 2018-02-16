import React, { Component } from 'react';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router-dom';
import { ListContact } from '../../components';

import './contacts.css';
import AddContact from './add-contact/AddContact';

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
      let contacts = snap.val();
      contacts = Object.values(contacts);
      this.setState({ contacts });
      this.setState({ contactsFiltered: contacts });
    });
  }

  handleSearch = (event, newValue) => {
    const contactsFiltered = this.state.contacts.filter(contact => contact.name.includes(newValue) || contact.nickname.includes(newValue));
    this.setState({ contactsFiltered });
  };

  handleClick = id => {
    /* eslint react/prop-types: 0 */
    this.props.history.push(`/profile/${id}`);
  };

  render() {
    return (
      <section className="Contacts">
        <AddContact />
        <div className="Contacts-search">
          <TextField floatingLabelText="Search a contact" floatingLabelStyle={{ color: 'white' }} inputStyle={{ color: 'white' }} onChange={this.handleSearch} />
        </div>
        <ListContact contacts={this.state.contactsFiltered} handleClick={id => this.handleClick(id)} />
      </section>
    );
  }
}

export default withRouter(Contacts);
