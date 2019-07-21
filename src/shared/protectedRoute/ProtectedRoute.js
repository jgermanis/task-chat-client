import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    const { component: Component, loggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={() =>
          loggedIn ? (
            <Component {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          )
        }
      />
    );
  }
}

export default ProtectedRoute;
