import React, {Component} from 'react';
import axios from "axios";
import MapContainer from './components/map';
import styled, {css} from 'styled-components'
import ContinentMenu from './components/continentMenu';
import ChangeViewMenu from './components/changeViewMenu';
import ListPage from './components/ListPage'
import InteractiveList from './components/List'
import ListClass from './components/ListClass'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {indigo } from '@material-ui/core/colors';
// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid red;
//   color: red;
//   margin: 0 1em;
//   padding: 0.25em 1em;
  
//   ${props =>
//     props.primary &&
//     css`
//       background: red;
//       color: white;
//     `};
// `
// const useStyles = makeStyles(theme => ({
//   blueColour: {
//     margin: 10,
//     color: '#fff',
//     backgroundColor: indigo[500],
//   },
// }));

// const classes = useStyles();
export class App extends Component {
  state = {
    center: undefined,
    page: "map"
  };
  
  changeView = (continent) => {
    return (
      this.setState({
        center: continent
      })
    )
  }
  changePage = (page) => {
    return (
      this.setState({
        page: page
      })
    )
  }

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
            <ChangeViewMenu changePage={this.changePage} />
          </Grid>  
        </Grid>  
        </header>
        {(this.state.page === "map") && <MapContainer center={this.state.center} />}
        {(this.state.page === "list") && <ListClass />}
      </div>
    );
  }

}

export default App;
