// simple Express.js RESTful API
"use strict";

// initialize
const port = 8888,
  express = require("express"),
  app = express();

// Middleware for JSON parsing
app.use(express.json());

// /hello/ GET request
app.get("/hello/:name?", (req, res) =>
  res.json({ message: `Hello ${req.params.name || "world"}!` }),
);

// Handle 404 (Not Found) errors
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
