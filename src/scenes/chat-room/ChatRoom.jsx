import React, { Component } from 'react';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import firebase from 'firebase';
import uuid from 'uuid';

class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      newMessage: '',
      sender: {
        email: sessionStorage.getItem('userEmail'),
        photo: sessionStorage.getItem('userPhoto'),
      },
    };
  }
  componentDidMount() {
    const db = firebase.database().ref('chatroom');

    db.on('value', snap => {
      let messages = snap.val();
      messages = Object.values(messages);
      this.setState({ messages });
    });
  }

  handleNewMessage = () => {
    const db = firebase.database().ref('chatroom');
    const { sender, newMessage } = this.state;
    const message = {
      sender,
      id: uuid(),
      message: newMessage,
    };
    this.setState({ newMessage: '' });
    db.push(message);
  };

  render() {
    return (
      <section style={{ paddingBottom: '5.5em' }}>
        {this.state.messages.map(msg => {
          if (this.state.sender.email === msg.sender.email) {
            return (
              <ListItem
                key={msg.id}
                disabled={true}
                primaryText={msg.message}
                style={{ textAlign: 'right', paddingRight: '70px' }}
                rightAvatar={<Avatar src={msg.sender.photo} size={40} />}
              />
            );
          }
          return (
            <ListItem
              key={msg.id}
              disabled={true}
              primaryText={msg.message}
              leftAvatar={<Avatar src={msg.sender.photo} size={40} />}
            />
          );
        })}

        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '0 1em',
          }}
        >
          <TextField
            fullWidth={true}
            floatingLabelText="Type something here"
            value={this.state.newMessage}
            onChange={(e, newMessage) => this.setState({ newMessage })}
          />
          <FlatButton
            label="Send"
            disabled={!this.state.newMessage}
            secondary={true}
            onClick={this.handleNewMessage}
          />
        </div>
      </section>
    );
  }
}

export default ChatRoom;
