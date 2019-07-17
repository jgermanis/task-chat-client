import React, { Component } from 'react';
import ChatList from './ChatList/ChatList';
import ChatSendForm from './ChatSendForm/ChatSendForm';
import PageContainer from '../PageContainer/PageContainer';

export default class Chat extends Component {
  state = {
    message: ''
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.message);
    this.setState({
      message: ''
    });
  };
  handleUpdate = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <PageContainer>
        <ChatList messages={this.props.messages} user={this.props.user} />
        <ChatSendForm
          message={this.state.message}
          update={this.handleUpdate}
          submit={this.handleSubmit}
        />
      </PageContainer>
    );
  }
};







