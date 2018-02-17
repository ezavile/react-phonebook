import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import * as firebase from 'firebase';
import LinearProgress from 'material-ui/LinearProgress';
import Snackbar from 'material-ui/Snackbar';
import uuid from 'uuid/v1';
import moment from 'moment';

class AddContact extends Component {
  constructor() {
    super();
    this.state = { ...this.reset() };
  }

  reset = () => ({
    open: false,
    openSnackbar: false,
    snackbarMessage: '',
    imgProgress: 0,
    bgProgress: 0,
    id: uuid(),
    img: null,
    bg: null,
    name: null,
    nickname: null,
    group: null,
    phone: null,
    email: null,
    birthdate: null,
    userId: sessionStorage.getItem('userEmail'),
  });

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ ...this.reset() });
  };

  handleFile = (event, cb) => {
    const img = event.target.files[0];
    const storageFile = firebase.storage().ref(`/photos/${img.name}`);
    const onUpload = storageFile.put(img);

    let percentage = 0;
    onUpload.on(
      'state_changed',
      snap => {
        percentage = snap.bytesTransferred / snap.totalBytes * 100;
        cb({ percentage });
      },
      error => console.log(error),
      () => {
        cb({ percentage: 100, downloadURL: onUpload.snapshot.downloadURL });
      },
    );
  };

  handleImg = event => {
    this.handleFile(event, ({ percentage, downloadURL }) => {
      if (percentage < 100) {
        this.setState({ imgProgress: percentage });
      } else {
        this.setState({ imgProgress: 100, img: downloadURL });
      }
    });
  };

  handleBg = event => {
    this.handleFile(event, ({ percentage, downloadURL }) => {
      if (percentage < 100) {
        this.setState({ bgProgress: percentage });
      } else {
        this.setState({ bgProgress: 100, bg: downloadURL });
      }
    });
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

  buildContact = () => {
    const { open, openSnackbar, snackbarMessage, imgProgress, bgProgress, ...contact } = this.state;
    return contact;
  };

  validateContact = contact => Object.values(contact).every(value => value);

  handleAddContact = () => {
    const contact = this.buildContact();
    if (!this.validateContact(contact)) {
      this.setState({
        openSnackbar: true,
        snackbarMessage: 'All fields are required!',
      });
    } else {
      const db = firebase.database().ref('contacts');
      db.push(contact).then(() => this.setState({ openSnackbar: true, snackbarMessage: 'New contact added to your phonebook' }));
      this.handleClose();
    }
  };

  render() {
    const actions = [<FlatButton label="Cancel" primary={true} onClick={this.handleClose} />, <FlatButton label="Add" secondary={true} onClick={this.handleAddContact} />];
    return (
      <div>
        <FloatingActionButton secondary={true} style={{ position: 'absolute', top: '1em', right: '1em', zIndex: '2' }} onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog autoScrollBodyContent={true} title="Add New Contact" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
          <RaisedButton style={{ marginTop: '1em' }} fullWidth={true} containerElement="label" label="Profile Image">
            <input type="file" onChange={this.handleImg} />
            <LinearProgress mode="determinate" value={this.state.imgProgress} />
          </RaisedButton>
          <RaisedButton style={{ marginTop: '1em' }} fullWidth={true} containerElement="label" label="Cover Image">
            <input type="file" onChange={this.handleBg} />
            <LinearProgress mode="determinate" value={this.state.bgProgress} />
          </RaisedButton>
          <TextField floatingLabelText="Name" fullWidth={true} onChange={this.handleName} />
          <TextField floatingLabelText="Nickname" fullWidth={true} onChange={this.handleNickname} />
          <TextField floatingLabelText="Group" fullWidth={true} onChange={this.handleGroup} />
          <TextField floatingLabelText="Phone" fullWidth={true} onChange={(e, phone) => this.setState({ phone })} />
          <TextField floatingLabelText="Email" fullWidth={true} onChange={(e, email) => this.setState({ email })} />
          <DatePicker floatingLabelText="Birthdate" onChange={(e, birthdate) => this.setState({ birthdate: moment(birthdate).format('DD/MM/YYYY') })} />
        </Dialog>
        <Snackbar open={this.state.openSnackbar} message={this.state.snackbarMessage} autoHideDuration={1000} onRequestClose={() => this.setState({ openSnackbar: false, snackbarMessage: '' })} />
      </div>
    );
  }
}

export default AddContact;
