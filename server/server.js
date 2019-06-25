const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')


app.use(bodyParser.json());


// create a GET route

app.get('/api/upload/background', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/server', (req, res) => {
  console.log(req.body);
  return res.send();
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
