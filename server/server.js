const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCp1Wpapl48sNfmuNfOx-RRJydW4gMGaRI'
});

let LatLng = [];

app.use(bodyParser.json());


// create a GET route

app.get('/api/upload/background', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/server', (req, res) => {
  console.log(req.body.address);
  googleMapsClient.geocode(req.body,
      function(err, response) {
    if (!err) {
      LatLng = [...LatLng, response.json.results[0].geometry.location]
      console.log(LatLng);
    } 
    console.log(address)
  });
  return res.send();
});

app.get('/getLngLat', (req, res) => {
  res.send({ LatLng: LatLng });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
