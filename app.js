const express = require('express');
const { version } = require('os');
const path = require('path');
const app = express();
const port = 6999;

// Serve static files from the 'public' directory
app.set('view engine', 'ejs');

// Route for the home page
app.get('/', (req, res) => {
  const items = Array(20).fill().map((_, i) => ({ id: i, name: `Item ${i}` })); // Create an array of 20 items
  res.render('index', { title: "BasicTube", version: "0.9.0" , items});
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
