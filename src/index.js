const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "src" folder
app.use(express.static(path.join(__dirname, 'src')));

// Start the server
const port = 3000; // You can change the port number if needed
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
