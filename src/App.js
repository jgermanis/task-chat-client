import React, { Component } from 'react';
import 'typeface-roboto';
import Login from './Login/Login';
import Chat from './Chat/Chat';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  state = {
    loggedIn: false,
    token: null,
    user: null,
    messages: [
      {
        text: 'message 1',
        id: 'msg1',
        date: {
          timestamp: Date.now().toLocaleString(),
          formatted: 'yesterday'
        },
        username: 'User1'
      },
      {
        text: 'message 2',
        id: 'msg2',
        date: {
          timestamp: Date.now().toLocaleString(),
          formatted: 'yesterday'
        },
        username: 'Tser1'
      },
      {
        text: 'message 3',
        id: 'msg3',
        date: {
          timestamp: Date.now().toLocaleString(),
          formatted: 'yesterday'
        },
        username: 'Zser1'
      }
    ]
  };

  loginHandler = () => {
    this.setState(prevState => ({
      ...prevState,
      loggedIn: true
    }));
  };

  loginPage = () => {
    if (!this.state.loggedIn) {
      return <Login onLogin={this.loginHandler} />;
    } else {
      return <Redirect to='/chat' />;
    }
  };

  guardedChatPage = () => {
    if (this.state.loggedIn) {
      return <Chat messages={this.state.messages} user={this.state.user} />;
    } else {
      return <Redirect to='/' />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Switch>
          <Route path='/' exact render={this.loginPage} />
          <Route path='/chat/' render={this.guardedChatPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
