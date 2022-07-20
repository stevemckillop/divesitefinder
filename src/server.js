const diveData = require("./data");
const { ishigaki, penida, sealife } = diveData;

const express = require("express");

const setupServer = () => {
    const app = express();
    app.use(express.json());
  
    app.get("/hello", (req, res) => {
      res.send("Hello world").status(200);
    });

    app.get("/api/sealife/", (req, res) => {
        const limit = req.query.limit;
        if (limit) {
          res.send(sealife.slice(0, limit));
        } else {
          res.send(sealife);
        }
      });

    app.get("/api/ishigaki/", (req, res) => {
        res.send(ishigaki).status(200);
      });

    app.get("/api/penida/", (req, res) => {
        res.send(penida).status(200);
      });

    app.get("/api/sealife/name/:name", (req, res) => {
        let getName = req.params.name;
        let pic = `./fishpics/${getName}.jpg`
        res.send(`./fishpics/${getName}.jpg`).status(200);
    })
    app.get("/api/divesites/ishigaki/:name", (req, res) => {
        let getName = req.params.name;
        console.log(getName);
        const findDiveSite = (obj) =>{
           return obj.name === getName;
        }
        let diveSite = ishigaki.findIndex(findDiveSite);
        let diveSiteReturn = ishigaki[diveSite];
        res.send(diveSiteReturn).status(200);
    })
    app.get("/api/divesites/penida/:name", (req, res) => {
        let getName = req.params.name;
        console.log(getName);
        const findDiveSite = (obj) =>{
           return obj.name === getName;
        }
        let diveSite = penida.findIndex(findDiveSite);
        let diveSiteReturn = penida[diveSite];
        res.send(diveSiteReturn).status(200);
    })

    app.post("/api/divesites/ishigaki/", (req, res) => {
        const newDiveSite = req.body;
        if (!newDiveSite.name) {
          res.status(400).send("Dive Site must contain a name");
        }
        ishigaki.push(newDiveSite);
        res.status(201).end();
      });
      
    app.post("/api/divesites/penida/", (req, res) => {
        const newDiveSite = req.body;
        if (!newDiveSite.name) {
          res.status(400).send("Dive Site must contain a name");
        }
        penida.push(newDiveSite);
        res.status(201).end();
      });
  
  return app;
  };
  
  module.exports = { setupServer };