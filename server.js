//import the express library
const express = require("express");
//import axios library
const axios = require("axios");
//create an instance of an express application
const app = express();

//define the port to run the server
const port = 3000;

//redirect to api/fun-fact automatically
app.get("/", (req, res)=> {
    res.redirect("api/fun-fact");
});

//create a new GET route at the path /api/fun-fact

app.get("/api/fun-fact", async (req, res) => {
  try {
    const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");

    const funFact = {
      fact: response.data.text,
    };

    res.json(funFact);
  } catch (error) {
    console.error("Error Fetching Facts:", error.message);
    res.status(500).json({ error: "Could not fetch fun fact" });
  }
});


//start the server on the port 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
