const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (CSS, JS, images, etc.) from the "public" directory
app.use('/static', express.static(path.join(__dirname, 'public')));

// Define your routes or middleware here

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
