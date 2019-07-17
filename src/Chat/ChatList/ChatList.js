import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core';
import { lime, purple } from '@material-ui/core/colors';

const createClasses = makeStyles(() => ({
  list: {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    overflowY: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  myMessage: {
    textAlign: 'right'
  },
  myAvatar: {
    backgroundColor: lime[500],
    marginLeft: 'auto'
  },
  avatar: {
    backgroundColor: purple[500]
  }
}));

const chatList = ({ messages, user }) => {
  const classes = createClasses();
  const item = message => {
    if (message.username === user) {
      return (
        <React.Fragment>
          <ListItemText
            className={classes.myMessage}
            primary={message.text}
            secondary={message.date.formatted}
          />
          <ListItemAvatar>
            <Avatar component='span' className={classes.myAvatar}>
              ME
            </Avatar>
          </ListItemAvatar>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <ListItemAvatar>
            <Avatar component='span' className={classes.avatar}>
              {message.username.slice(0, 2)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={message.text}
            secondary={message.date.formatted}
          />
        </React.Fragment>
      );
    }
  };
  return (
    <List component='ul' className={classes.list}>
      {messages.map(message => (
        <React.Fragment key={message.id}>
          <ListItem component='li' alignItems='flex-start'>
            {item(message)}
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

export default chatList
