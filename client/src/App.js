/*global chrome*/
import React, {Component} from 'react';
import MapContainer from './components/map';
import styled, {css} from 'styled-components'
import ContinentMenu from './components/continentMenu';
import ChangeViewMenu from './components/changeViewMenu';
 
let cat = localStorage.getItem('Location')
console.log(cat)
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

  

  componentWillMount() {
    localStorage.getItem('Location') && this.setState ({
      Location: JSON.Parse(localStorage.getItem('Location'))
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <View style={{ flexDirection: 'row' }}></View> */}
          <ContinentMenu changeView={this.changeView} />
          <ChangeViewMenu  />
        <p>Calgary, Alberta</p>
        </header>
        <MapContainer center={this.state.center} />
        
      </div>
    );
  }

}
console.log(Location)
export default App;
