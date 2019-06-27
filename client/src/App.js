import React, {Component} from 'react';
import axios from "axios";
import MapContainer from './components/map';
import styled, {css} from 'styled-components'
import ContinentMenu from './components/continentMenu';
import ChangeViewMenu from './components/changeViewMenu';
import Grid from '@material-ui/core/Grid';

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  margin: 0 1em;
  padding: 0.25em 1em;
  
  ${props =>
    props.primary &&
    css`
      background: red;
      color: white;
    `};
`

export class App extends Component {
  state = {
    center: undefined
  };

  changeView = (continent) => {
    return (
      this.setState({
        center: continent
      })
    )
  }
  
  // getLngLat = () => {
  //   return axios({
  //     method: "POST",
  //     url: "/server"
  //   })
  // }

  // componentDidMount() {
  //   this.getLngLat()
  //   .then(response => {
  //     var i;
  //     for (i = 0; i < 8; i++) {
  //       console.log(response.data.locations[i], response.data.LatLng[i]);
  //     }
  //   });
  // }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <View style={{ flexDirection: 'row' }}></View> */}
        <Grid container spacing={3} justify="center">
          <Grid item xs={3}>
            <ContinentMenu changeView={this.changeView} />
          </Grid>
          <Grid item xs={3}>
            <ChangeViewMenu  />
          </Grid>  
        </Grid>  
        </header>
        <MapContainer center={this.state.center} />
        
      </div>
    );
  }

}

export default App;
