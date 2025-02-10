const express = require("express");
const cors = require("cors");
const quotes = require("./data/quotes");

const app = express();

app.use(cors());
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Quotes API",
    endpoints: {
      getAllQuotes: "/api/quotes",
      getRandomQuote: "/api/quotes/random",
    },
  });
});

// Get all quotes
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

// Get random quote
app.get("/api/quotes/random", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
