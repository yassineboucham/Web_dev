import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1> Homme Page</h1>");
});

app.get("/About", (req, res) => {
  res.send("<h1> About Page</h1>");
});

app.get("/Contact", (req, res) => {
  res.send("<h1> Contact Page</h1>");
});

app.listen(port, () => {
  console.log("server raning on the port number " + port);
});
