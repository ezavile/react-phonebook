import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import uuid from 'uuid/v1';
import Snackbar from 'material-ui/Snackbar';

/* eslint react/no-unused-state: 0 */
class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      isDialogOpen: false,
      imgProgress: 0,
      bgProgress: 0,
      openSnackbar: false,
      snackbarMessage: '',
      img: null,
      bg: null,
      name: '',
      nickname: '',
      group: '',
      phone: '',
      email: '',
      birthdate: '',
      userId: sessionStorage.getItem('userEmail'),
      id: uuid(),
    };
  }

  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  };

  openDialog = () => {
    this.setState({ isDialogOpen: true });
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

  handleNickName = (event, nickname) => {
    this.setState({ nickname });
  };

  handleGroup = (event, group) => {
    this.setState({ group });
  };

  handleAddContact = () => {
    const {
      openSnackbar,
      isDialogOpen,
      snackbarMessage,
      imgProgress,
      bgProgress,
      ...contact
    } = this.state;

    const isValid = Object.values(contact).every(value => value);
    if (isValid) {
      const db = firebase.database().ref('contacts');
      db
        .push(contact)
        .then(() =>
          this.setState({
            isDialogOpen: false,
            openSnackbar: true,
            snackbarMessage: 'New contact added to your phonebook',
          }),
        )
        .catch(err =>
          this.setState({
            openSnackbar: true,
            snackbarMessage: err.message,
          }),
        );
    } else {
      this.setState({
        openSnackbar: true,
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
          contentStyle={{ width: '100%', maxWidth: 'none' }}
          autoScrollBodyContent={true}
          title="Add New Contact"
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
          modal={false}
          open={this.state.isDialogOpen}
          onRequestClose={this.closeDialog}
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
            onChange={(e, birthdate) =>
              this.setState({
                birthdate: moment(birthdate).format('DD/MM/YYYY'),
              })
            }
          />
        </Dialog>
        <Snackbar
          open={this.state.openSnackbar}
          message={this.state.snackbarMessage}
          autoHideDuration={1000}
          onRequestClose={() =>
            this.setState({ openSnackbar: false, snackbarMessage: '' })
          }
        />
      </section>
    );
  }
}

export default AddContact;
