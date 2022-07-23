const diveData = require("./data");
const { divesites, sealife } = diveData;

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

    app.get("/api/divesites/", (req, res) => {
        res.send(divesites).status(200);
      });


    app.get("/api/sealife/name/:name", (req, res) => {
        let getName = req.params.name;
        let pic = `./fishpics/${getName}.jpg`
        res.send(`./fishpics/${getName}.jpg`).status(200);
    })
    app.get("/api/divesites/:name", (req, res) => {
        let getName = req.params.name;
        console.log(getName);
        const findDiveSite = (obj) =>{
           return obj.name === getName;
        }
        let diveSite = divesites.findIndex(findDiveSite);
        let diveSiteReturn = divesites[diveSite];
        res.send(diveSiteReturn).status(200);
    })

    app.get("/api/divesites/location/:location", (req, res) => {
        let getLocation = req.params.location;
        console.log(getLocation)
        let location = divesites.filter(obj => {
            return obj.location === getLocation;
        })
        res.send(location).status(200);
    })

    app.post("/api/divesites/", async (req, res) => {
        const newDiveSite = req.body;
        if (!newDiveSite.name) {
          res.status(400).send("Dive Site must contain a name");
        }
        try {
            await db("divesites")
                .insert({
                    name: divesites.name,
                    location: divesites.location,
                    sealife: sealife,
                })
                res.status(204).end();
        } catch (err) {
            res.send(err).status(404);
        }
        divesites.push(newDiveSite);
        res.status(201).end();
      });

  
  return app;
  };
  
  module.exports = { setupServer };