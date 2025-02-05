  import express from "express";
  import { dirname } from "path";
  import { fileURLToPath } from "url";
  import bodyParser from "body-parser";
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const app = express();
  const port = 3000;
  var bandname = "";
  
  app.use(bodyParser.urlencoded({extended: true}));
  
  function band(req, res, next){
    console.log(req.body);
    bandname = req.body[" "] + req.body["pet"];
    next();
  }

  app.use(band);
  
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
  });

  app.post("/submit", (req, res) => {
    res.send("<h1>Your band is :</h1>" + bandname);
  })


  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
