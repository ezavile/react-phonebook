import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import uuid from 'uuid/v1';
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import Snackbar from 'material-ui/Snackbar';

/* eslint react/no-unused-state: 0 */

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      isDialogOpen: false,
      name: '',
      nickname: '',
      group: '',
      phone: '',
      email: '',
      birthdate: '',
      id: uuid(),
      imgProgress: 0,
      bgProgress: 0,
      img: '',
      bg: '',
      userId: 'ezavile@gmail.com',
      isOpenSnackbar: false,
      snackbarMessage: '',
    };
  }
  openDialog = () => {
    this.setState({ isDialogOpen: true });
  };
  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  handleName = (event, name) => {
    this.setState({ name });
  };

  handleNickName = (event, nickname) => {
    this.setState({ nickname });
  };

  handleGroup = (event, group) => {
    this.setState({ group });
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
        cb(percentage);
      },
      error => console.log(error),
      () => {
        cb(100, onUpload.snapshot.downloadURL);
      },
    );
  };

  handleImg = event => {
    this.handleFile(event, (percentage, img) => {
      if (percentage < 100) {
        this.setState({ imgProgress: percentage });
      } else {
        this.setState({ imgProgress: 100, img });
      }
    });
  };

  handleBg = event => {
    this.handleFile(event, (percentage, bg) => {
      if (percentage < 100) {
        this.setState({ bgProgress: percentage });
      } else {
        this.setState({ bgProgress: 100, bg });
      }
    });
  };

  handleAddContact = () => {
    const {
      isDialogOpen,
      imgProgress,
      bgProgress,
      isOpenSnackbar,
      snackbarMessage,
      ...contact
    } = this.state;
    const isValid = Object.values(contact).every(attr => attr);

    if (isValid) {
      const db = firebase.database().ref('contacts');

      db
        .push(contact)
        .then(() => {
          this.setState({
            isDialogOpen: false,
            isOpenSnackbar: true,
            snackbarMessage: 'New contact added to your phonebook',
          });
        })
        .catch(err => {
          this.setState({
            isOpenSnackbar: true,
            snackbarMessage: err.message,
          });
        });
    } else {
      this.setState({
        isOpenSnackbar: true,
        snackbarMessage: 'All fields are reqired!',
      });
    }
  };

  render() {
    return (
      <section>
        <FloatingActionButton
          secondary={true}
          style={{
            position: 'absolute',
            top: '1em',
            right: '1em',
            zIndex: '2',
          }}
          onClick={this.openDialog}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add New Contact"
          autoScrollBodyContent={true}
          contentStyle={{ width: '100%', maxWidth: 'none' }}
          open={this.state.isDialogOpen}
          onRequestClose={this.closeDialog}
          actions={[
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.closeDialog}
            />,
            <FlatButton
              label="Add"
              secondary={true}
              onClick={this.handleAddContact}
            />,
          ]}
        >
          <RaisedButton
            style={{ marginTop: '1em' }}
            fullWidth={true}
            containerElement="label"
            label="Profile Image"
          >
            <input type="file" onChange={this.handleImg} />
            <LinearProgress mode="determinate" value={this.state.imgProgress} />
          </RaisedButton>
          <RaisedButton
            style={{ marginTop: '1em' }}
            fullWidth={true}
            containerElement="label"
            label="Cover Image"
          >
            <input type="file" onChange={this.handleBg} />
            <LinearProgress mode="determinate" value={this.state.bgProgress} />
          </RaisedButton>
          <TextField
            floatingLabelText="Name"
            fullWidth={true}
            onChange={this.handleName}
          />
          <TextField
            floatingLabelText="Nickname"
            fullWidth={true}
            onChange={this.handleNickName}
          />
          <TextField
            floatingLabelText="Group"
            fullWidth={true}
            onChange={this.handleGroup}
          />
          <TextField
            floatingLabelText="Phone"
            fullWidth={true}
            onChange={(e, phone) => this.setState({ phone })}
          />
          <TextField
            floatingLabelText="Email"
            fullWidth={true}
            onChange={(e, email) => this.setState({ email })}
          />
          <DatePicker
            floatingLabelText="Birthdate"
            fullWidth={true}
            onChange={(e, birthdate) => this.setState({ birthdate })}
          />
        </Dialog>
        <Snackbar
          open={this.state.isOpenSnackbar}
          message={this.state.snackbarMessage}
          autoHideDuration={2000}
          onRequestClose={() =>
            this.setState({ isOpenSnackbar: false, snackbarMessage: '' })
          }
        />
      </section>
    );
  }
}

export default AddContact;
