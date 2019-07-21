import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import PageContainer from "../../shared/pageContainer/PageContainer";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import { config } from "../../config";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const loginClasses = theme => ({
  main: {
    height: "100vh",
    padding: "30px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "100%",
    marginTop: "15px"
  },
  submit: {
    margin: "24px 0px 16px"
  },
  error: {
    backgroundColor: theme.palette.error.dark,
    marginTop: "20px",
    textAlign: "center"
  }
});

class Login extends Component {
  state = {
    userName: "",
    error: null
  };

  handleChange = event => {
    if (this.props.disconnected) {
      this.props.resetDiscconected();
    }
    this.setState({ userName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.userName) {
      return this.setState({error: 'Please enter username.'})
    }
    this.setState({ error: null });
    event.preventDefault();
    axios.post(config.devApiUrl + "login", { user: this.state.userName }).then(
      res => {
        this.props.onLogin(res.data.user);
      },
      error => {
        this.setState({
          error: (error.response && error.response.data) || "Error"
        });
      }
    );
  };

  render() {
    return (
      <PageContainer>
        <div className={this.props.classes.main}>
          <Typography component="h1" variant="h2">
            Chat App
          </Typography>
          <form
            className={this.props.classes.form}
            noValidate
            onSubmit={this.handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={this.handleChange}
            />
            {this.state.error ? (
              <SnackbarContent
                className={this.props.classes.error}
                message={this.state.error}
              />
            ) : null}
            {this.props.disconnected ? (
              <SnackbarContent
                className={this.props.classes.error}
                message="Disconnected due to inactivity."
              />
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.classes.submit}
            >
              Log In
            </Button>
          </form>
        </div>
      </PageContainer>
    );
  }
}

export default withStyles(loginClasses)(Login)
