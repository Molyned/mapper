
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
require('dotenv').config(); 
const googleMapsClient = require('@google/maps').createClient({
  key:  process.env.MAP_KEY //'AIzaSyAKONVO8XPVqx1EPWWh4uZV9w-__Hx-RMU'
});
const cors = require('cors')

let LatLng = [];
let locations = [];

//set up CORS
app.use(cors())

//set up body parser
app.use(bodyParser.json());

// create a GET route

app.get('/api/upload/background', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/server', (req, res) => {
  locationName = req.body.address
  console.log(locationName);
  googleMapsClient.geocode(req.body,
    function(err, response) {
      if (!err) {
        LatLng = [...LatLng, response.json.results[0].geometry.location]
        locations = [...locations, locationName]
        console.log(LatLng, locations);
      } 
      console.log(address)
  });
  return res.send({locations: locations, LatLng: LatLng});
});


app.get('/', function(req, res){
  res.sendFile(__dirname+'/bin/app.js'); // change the path to your index.html
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
