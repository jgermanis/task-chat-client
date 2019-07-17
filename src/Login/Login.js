import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PageContainer from '../PageContainer/PageContainer';

const login = ({ onLogin }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onLogin();
  };

  const classes = makeStyles(() => ({
    main: {
      height: '100vh',
      padding: '30px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      width: '100%',
      marginTop: '15px'
    },
    submit: {
      margin: '24px 0px 16px'
    }
  }))();

  return (
    <PageContainer>
      <div className={classes.main}>
        <Typography component='h1' variant='h2'>
          Chat App
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='Name'
            name='name'
            autoComplete='name'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </div>
    </PageContainer>
  );
};

export default login;
