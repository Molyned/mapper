import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function ChangeViewMenu(props) {
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
        Change View
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
        
          <MenuItem onClick={() => {handleClose(); props.changePage("list")}}> List View </MenuItem>
          <MenuItem onClick={() => {handleClose(); props.changePage("map")}}> Map View </MenuItem>
          
        </Menu>
      </div>
    );
  }
