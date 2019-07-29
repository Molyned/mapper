import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import DeleteIcon from '@material-ui/icons/Delete';
import {indigo } from '@material-ui/core/colors';
import axios from "axios";
import { Icon } from '@material-ui/core';
let markers = []


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  blueColour: {
    margin: 10,
    color: '#fff',
    backgroundColor: indigo[500],
  },
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense] = React.useState(false);

  function getLngLat() {
    return axios({
      method: "POST",
      url: "/server"
    })
  }
  
  

  return (
    <div className={classes.root}>
    <Grid container spacing={2}>
            
        <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
                List of Saved Places
            </Typography>
                <div className={classes.places}>
                    <List dense={dense}>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar className={classes.blueColour}>
                                        <AddLocationIcon />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary="dog"
                                    />
                                    
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="Delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                    </List>
                </div>
        </Grid>
    </Grid>
    </div>
  );
}
