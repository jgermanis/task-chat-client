import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Send from '@material-ui/icons/Send';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const createClasses = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 'calc(100% - 100px)',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const chatSendForm = ({ message, update, submit }) => {
  const classes = createClasses();
  return (
    <form className={classes.form} noValidate onSubmit={submit}>
      <TextField
        id="standard-multiline-static"
        placeholder="Enter your message"
        variant="outlined"
        multiline
        rows="3"
        value={message}
        className={classes.textField}
        onChange={update}
        margin="normal"
      />
      <Fab color="primary" type="submit">
        <Send />
      </Fab>
    </form>
  );
};

export default chatSendForm;
