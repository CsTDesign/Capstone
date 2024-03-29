import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contacts from "./routers/contacts.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB, {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 4040;

// Logging Middleware
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};
app.use(logging);

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
app.use(cors);
app.use(express.json());
app.use(logging);
// Request handlers go here
app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.use("/contacts", contacts);

// Handle the request with HTTP GET method with query parameters and a url parameter
// app.get("/weather/:city", (request, response) => {
//   // Express adds a "params" Object to requests that has an matches parameter created using the colon syntax
//   const city = request.params.city;

//   // Set defaults values for the query string parameters
//   let cloudy = "clear";
//   let rainy = false;
//   let lowTemp = 32;
//   // check if the request.query.cloudy attribute exists
//   if ("cloudy" in request.query) {
//     // If so update the variable with the query string value
//     cloudy = request.query.cloudy;
//   }
//   if ("rainy" in request.query && request.query.rainy === "true") {
//     rainy = request.query.rainy;
//   }
//   if ("lowtemp" in request.query) {
//     lowTemp = Number(request.query.lowtemp);
//   }

//   // Generate a random number to use as the temperature
//   // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
//   const min = 70;
//   const max = 90;
//   const temp = Math.floor(Math.random() * (max - min + 1) + min);
//   // handle GET request for weather with an route parameter of "city"
//   response.json({
//     text: `The weather in ${city} is ${temp} degrees today.`,
//     cloudy: cloudy,
//     // When the key and value variable are named the same you can omit the value variable
//     rainy,
//     temp: {
//       current: temp,
//       low: lowTemp
//     },
//     city
//   });
// });

app.listen(PORT, () => console.log("Listening on port 4040"));
