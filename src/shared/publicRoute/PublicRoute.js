import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PublicRoute extends Component {
  render() {
    const { component: Component, loggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={() =>
          !loggedIn ? (
            <Component {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: "/chat"
              }}
            />
          )
        }
      />
    );
  }
}

export default PublicRoute;
