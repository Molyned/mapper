import React, {Component} from 'react';
import MapContainer from './components/map';
import ContinentMenu from './components/continentMenu';
import ChangeViewMenu from './components/changeViewMenu';
import ListClass from './components/ListClass'
import HomePage from './components/HomePage'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {indigo } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { BrowserRouter, Route, Link, Switch  } from "react-router-dom";

const styles = makeStyles(theme => ({
  blueColour: {
    margin: 10,
    color: '#fff',
    backgroundColor: indigo[500],
  },
}));

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

    // const {classes} = this.props;

    return (
      <div className="App">
          <h1>
            <Switch>
          <Route path="/HomePage" component={HomePage} />
          </Switch>
          </h1>
          {/* <h1 className={classes.blueColour}> DOG 
        </h1> */}
        {/* <header className="App-header"> */}
        {/* <View style={{ flexDirection: 'row' }}></View> */}
        {/* <Grid container spacing={3} justify="center">
          <Grid item xs={3}>
            <ContinentMenu changeView={this.changeView} />
          </Grid>
          <Grid item xs={3}>
            <ChangeViewMenu changePage={this.changePage} />
          </Grid>  
        </Grid>  
        </header> */}
        {/* {(this.state.page === "map") && <MapContainer center={this.state.center} />}
        {(this.state.page === "list") && <ListClass />} */}
      </div>
    );
  }

}

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default App;
