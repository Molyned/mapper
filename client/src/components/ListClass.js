import React, {Component} from 'react';
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



export default class ListClass extends Component {
    // const classes = useStyles();
    
    state = {
        markers: []
    };
    
    getName = () => {
        return axios({
          method: "POST",
          url: "/server"
        })
      }
    
      componentDidMount() {
          this.createListItems()
      }

    createListItems = () => {
    this.getName().then(response => {
        for (let i = 0; i < response.data.locations.length; i++) {
            console.log("Name: ", response.data.locations[i])
            this.setState({
                markers:[...this.state.markers, 
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar >
                                <AddLocationIcon />
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText
                            primary={response.data.locations[i]}
                        />
                        
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    
                    </ListItem>
                ]
            })
        }
    });
    } 
    render() {
        return(
            <div >
            <Grid container spacing={2}>
                    
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" >
                        List of Saved Places
                    </Typography>
                        <div >
                            <List >
                                {this.state.markers} 
                            </List>
                        </div>
                </Grid>
            </Grid>
            </div>
          );
    }
}