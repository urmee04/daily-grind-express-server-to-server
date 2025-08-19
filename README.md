### Lab 12.2: Server to Server Communication

A simple Express.js server that fetches a random fun fact from the [Useless Facts API](https://uselessfacts.jsph.pl/) and serves it at a custom endpoint.

---

#### Features
- Express.js server running on **port 3000**
- Fetches a random fun fact using **axios**
- Custom API endpoint: `/api/fun-fact`
- Error handling with descriptive messages

---

#### Project Structure

```bash
daily-grind-express-server-to-server/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```
---

#### Installation & Setup

1. Clone the repository:
   ```bash
    git clone https://github.com/urmee04/daily-grind-express-server-to-server.git
    cd daily-grind-express-server-to-server
   ```
2. Install dependencies:
   
   `npm install`
  

3. Start the server:

   `npm start`
---
#### Reflection Questions

**Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?**

I reformatted the data because the Useless Facts api returns more fields than I actually needed. My application only cared about the fact itself, not the other        metadata. By returning a clean, minimal response, I make it easier for the client to consume the data without having to filter or parse unnecessary details. This improves performance, reduces confusion, and makes my api more user friendly.


**In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?**

In my opinion, sending a generic error message is safer and more professional. The axios error object can contain technical details that the client doesn’t need and might even expose information about our server or the external API. By keeping the error message simple, like 'Could not fetch fun fact' we protect sensitive details, avoid confusing the client with unnecessary information, and maintain a consistent error response.


**How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?**

If I wanted to support multiple languages, I would modify my GET route to accept a query parameter from the client, like /api/fun-fact?lang=de. Inside the code, I would pass that parameter along to the external api request

```bash
 const lang = req.query.lang || "en"; 
 const response = await axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=${lang}`);
``` 
This way, the client can choose the language they want and my server would just forward it to the Useless Facts api.
