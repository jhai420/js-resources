const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const resourceRouter = require('./routes/resource-router');

app.use(express.json());
app.use(cors());

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/api', resourceRouter);

app.get('/', (req, res) => {
  //res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  res.send('hello from server');
})


// Connect MongoDB;
mongoose.connect('mongodb+srv://jenny:7xt01c7IgIW8Ov7T@cluster0.ufcm8.mongodb.net/resourcesDB?retryWrites=true&w=majority', {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

// Start server on Port 3000
app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
})

// mongoimport --uri mongodb+srv://jenny:7xt01c7IgIW8Ov7T@cluster0.ufcm8.mongodb.net/resourcesDB --collection resources --type csv --headerline --file /Users/jennyhai/Downloads/resources.csv


