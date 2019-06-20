
import Geocode from "react-geocode";

Geocode.setApiKey('AIzaSyCp1Wpapl48sNfmuNfOx-RRJydW4gMGaRI');

Geocode.enableDebug();

Geocode.fromAddress(localStorage.getItem('Location')).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    error => {
      console.error(error);
    }
  );