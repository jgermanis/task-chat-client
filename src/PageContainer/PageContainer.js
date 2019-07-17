import Container from '@material-ui/core/Container';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    paddingTop: '20px',
    paddingBottom: '20px',
    backgroundColor: theme.palette.background.paper
  }
}));

const PageContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Container component='main' maxWidth='sm' className={classes.container}>
      {children}
    </Container>
  );
};

export default PageContainer;
