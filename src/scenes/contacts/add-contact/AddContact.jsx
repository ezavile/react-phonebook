import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      img: null,
      bg: null,
      name: null,
      nickname: null,
      group: null,
      phone: null,
      email: null,
      birthdate: null,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleImg = event => {
    const img = event.target.files[0];
    this.setState({ img });
  };

  handleName = (event, name) => {
    this.setState({ name });
  };

  handleNickname = (event, nickname) => {
    this.setState({ nickname });
  };

  handleGroup = (event, group) => {
    this.setState({ group });
  };

  handleAddContact = () => {
    console.log(this.state);
  };

  render() {
    const actions = [<FlatButton label="Cancel" primary={true} onClick={this.handleClose} />, <FlatButton label="Add" secondary={true} onClick={this.handleAddContact} />];
    return (
      <div>
        <FloatingActionButton secondary={true} style={{ position: 'absolute', top: '1em', right: '1em', zIndex: '2' }} onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog title="Add New Contact" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
          <RaisedButton containerElement="label" label="Profile Image">
            <input type="file" onChange={this.handleImg} />
          </RaisedButton>
          <TextField floatingLabelText="Name" fullWidth={true} onChange={this.handleName} />
          <TextField floatingLabelText="Nickname" fullWidth={true} onChange={this.handleNickname} />
          <TextField floatingLabelText="Group" fullWidth={true} onChange={this.handleGroup} />
          <TextField floatingLabelText="Phone" fullWidth={true} onChange={(e, phone) => this.setState({ phone })} />
          <TextField floatingLabelText="Email" fullWidth={true} onChange={(e, email) => this.setState({ email })} />
          <DatePicker floatingLabelText="Birthdate" onChange={(e, birthdate) => this.setState({ birthdate })} />/>
        </Dialog>
      </div>
    );
  }
}

export default AddContact;
