const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    console.error("Error rendering index page:", err);
  }
});
app.get("/index", (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    console.error("Error rendering index page:", err);
  }
});
//render all of the pages



app.use((req, res) => {
  res.status(404).render("404");
});

// Start the server and listen for incoming requests on port 8080
app.listen(3000, () => {
  console.log("Server started on port 3000");
});