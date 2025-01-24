const express = require('express');
const path = require('path');
const app = express();
const port = 6999;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'src/public')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
