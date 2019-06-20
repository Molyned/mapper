import React, { Component }  from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export class ContinentMenu extends Component {
  state = {
    anchorEl: null, 
    // setAnchorEl: undefined
  };
  changeView = (continent) => {
    return (
      this.setState({
        center: continent
      })
    )
  }
  setAnchorEl = (event) => {
    return(null)
  }
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   }



//   handleClose = () => {
//     setAnchorEl(null);
//   }

  render() {
    return (
        <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => this.setAnchorEl()}>
          Continent Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.anchorEl}
          keepMounted
          open={Boolean(this.anchorEl)}
        //   onClose={this.handleClose}
        >     
          <MenuItem  onClick={() => this.changeView("NA")}> North America </MenuItem>
          <Button  onClick={() => this.changeView("SA")}> South America </Button>
          <Button  onClick={() => this.changeView("OC")}> Oceania </Button>
          <Button  onClick={() => this.changeView("AS")}> Asia </Button>
          <Button  onClick={() => this.changeView("EU")}> Europe </Button>
          <Button  onClick={() => this.changeView("AF")}> Africa </Button>
        
        </Menu>
      </div>
    );
  }
}

export default ContinentMenu;
