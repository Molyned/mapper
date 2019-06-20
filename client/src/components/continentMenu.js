import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function ContinentMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function handleClose() {
      setAnchorEl(null);
    }

    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Change Continents
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        
          <MenuItem onClick={() => {handleClose(); props.changeView("NA")}}> North America </MenuItem>
          <MenuItem onClick={() => {handleClose(); props.changeView("SA")}}> South America </MenuItem>
          <MenuItem onClick={() => {handleClose(); props.changeView("OC")}}> Oceania </MenuItem>
          <MenuItem onClick={() => {handleClose(); props.changeView("AS")}}> Asia </MenuItem>
          <MenuItem onClick={() => {handleClose(); props.changeView("EU")}}> Europe </MenuItem>
          <MenuItem onClick={() => {handleClose(); props.changeView("AF")}}> Africa </MenuItem>
        
        </Menu>
      </div>
    );
  }