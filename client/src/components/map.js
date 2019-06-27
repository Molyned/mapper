import React, {Component} from 'react';
import {Map, GoogleApiWrapper,  InfoWindow, Marker} from 'google-maps-react';
import axios from "axios";
const mapStyles = {
    width: '100%',
    height: '90%'
  };

  const continents = {
    NA: {lat: 54.5260, lng: -105.2551},
    SA: {lat: -21.440758, lng: -58.227435},
    AF: {lat: 5.104119, lng: 23.51046},
    OC: {lat: -6.049354, lng: 134.531997},
    AS: {lat: 34.0479, lng: 100.6197},
    EU: {lat: 54.5260, lng: 15.2551},
  }

  export class MapContainer extends Component {
      state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
      };
      onClose = props => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
                });
            }
        };
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    
     
  getLngLat = () => {
    return axios({
      method: "POST",
      url: "/server"
    })
  }

  componentDidMount() {
    this.getLngLat()
    .then(response => {
      var i;
      for (i = 0; i < response.data.locations.length; i++) {
        console.log(response.data.locations[i], response.data.LatLng[i]);
      }
    });
  }

      render() {
          return(
              
              <Map
              google={this.props.google}
            //   zoom={9}
            zoom = {
                this.props.center
                ? 4
                : 9
            }
              style={mapStyles}
              initialCenter={{lat: 44.3, lng: -76.48}}
              center={
                  this.props.center
                  ? continents[this.props.center]
                  : {lat: 44.3, lng: -76.48}
                }
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Daniels Home'}
                    position={{ lat: 44.230533, lng: -76.460828}}

                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
            );
      }
  }

// function onMarkerClick(props, marker, e) {
//     this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//     });
// }

// function onClose(props) {
//     if(this.state.showingInfoWindow) {
//         this.setState({
//             showingInfoWindow: false,
//             activeMarker: null
//         });
//     }
// } 

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCp1Wpapl48sNfmuNfOx-RRJydW4gMGaRI'
})(MapContainer);

