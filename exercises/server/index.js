const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello World");
});

app.all("*", (req, res) => {
  res.send("<h1>404 pagina non trovata</h1>");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/contatti", (req, res) => {
  res.send("Contatti");
});

app.listen(3000);
