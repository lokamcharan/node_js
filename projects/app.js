const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./Route/route');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/mvc_example', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});
