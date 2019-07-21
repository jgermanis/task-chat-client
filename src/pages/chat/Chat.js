import React, { Component } from 'react';
import ChatList from './chatList/ChatList';
import ChatSendForm from './chatSendForm/ChatSendForm';
import PageContainer from '../../shared/pageContainer/PageContainer';

export default class Chat extends Component {
  state = {
    messages: [],
    message: '',
  };

  ws = new WebSocket(`ws://localhost:3001/ws?user=${this.props.user}`);

  componentDidMount() {
    this.ws.onmessage = evt => {
      const msg = JSON.parse(evt.data);
      if (msg.type !== 'status') {
        this.setState(prevState => {
          const messages = [...prevState.messages, msg];
          return { messages: messages };
        });
      }
    };

    this.ws.onclose = () => {
      this.props.onDisconnect();
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const message = {
      type: 'message',
      user: this.props.user,
      text: this.state.message,
      date: {
        timestamp: Date.now(),
        formatted: new Date().toDateString(),
      },
    };
    this.ws.send(JSON.stringify(message));
    this.setState(prevState => {
      const messages = [...prevState.messages, message];
      return { messages: messages, message: '' };
    });
  };
  handleUpdate = event => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    return (
      <PageContainer>
        <ChatList messages={this.state.messages} user={this.props.user} />
        <ChatSendForm
          message={this.state.message}
          update={this.handleUpdate}
          submit={this.handleSubmit}
        />
      </PageContainer>
    );
  }
}
