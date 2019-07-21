import React, { Component } from 'react';
import 'typeface-roboto';
import { BrowserRouter as Switch } from 'react-router-dom';
import ProtectedRoute from './shared/protectedRoute/ProtectedRoute';
import PublicRoute from './shared/publicRoute/PublicRoute';
import Login from './pages/login/Login';
import Chat from './pages/chat/Chat';

class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    disconnected: false,
  };

  disconnectHandler = () => {
    this.setState({
      user: null,
      loggedIn: false,
      disconnected: true,
    });
  };

  loginHandler = userName => {
    this.setState(() => ({
      loggedIn: true,
      user: userName,
    }));
  };

  resetDisconnectedHandler = () => {
    this.setState({ disconnected: false });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <ProtectedRoute
            exact
            path="/chat"
            loggedIn={this.state.loggedIn}
            component={Chat}
            user={this.state.user}
            onDisconnect={this.disconnectHandler}
          />
          <PublicRoute
            path="/"
            component={Login}
            loggedIn={this.state.loggedIn}
            onLogin={this.loginHandler}
            resetDiscconected={this.resetDisconnectedHandler}
            disconnected={this.state.disconnected}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
