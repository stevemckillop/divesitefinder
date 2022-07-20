const diveData = require("./data");
const { ishigaki, penida, sealife } = diveData;

const express = require("express");

const setupServer = () => {
    const app = express();
    app.use(express.json());
  
    app.get("/hello", (req, res) => {
      res.send("Hello world").status(200);
    });
  
  return app;
  };
  
  module.exports = { setupServer };