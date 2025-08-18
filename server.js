//import the express library
const express = require(express);

//create an instance of an express application
const app = Express();

//define the port to run the server
const port = 3000;

//start the server on the port 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
