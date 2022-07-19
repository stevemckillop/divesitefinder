const setupServer = () => {
    const app = express();
    app.use(express.json());
  
    app.get("/hello", (req, res) => {
      res.send("world").status(200);
    });
git 
  
    app.post("/api/pokemon/", (req, res) => {
      const newPokemon = req.body;
      if (!newPokemon.name) {
        res.status(400).send("Pokemon must contain a name");
      }
      pokemon.push(newPokemon);
      res.status(201).end();
    });
  
    app.get("/api/pokemon/id/:id", (req, res) => {
      let getId = req.params.id;
      if (getId.length === 1) {
        getId = `00${getId}`;
      }
      if (getId.length === 2) {
        getId = `0${getId}`;
      }
      const numberIndex = parseInt(getId);
      const foundPokemon = pokemon[numberIndex - 1];
      res.send(foundPokemon).status(200);
    });
  
    app.get("/api/pokemon/name/:name", (req, res) => {
      let thisname = req.params.name;
      let foundPokemon = findPokemon(thisname);
      res.send(foundPokemon).status(200);
    });
  
    app.patch("/api/pokemon/:idOrName", (req, res) => {
      const targetPokemon = req.params.idOrName;
      const foundPokemon = findPokemon(targetPokemon);
      const patchPokemon = req.body;
  
      for (const key in patchPokemon) {
        foundPokemon[key] = patchPokemon[key];
      }
  
      if (foundPokemon.classification == patchPokemon.classification) {
        res.status(200).send(foundPokemon);
      } else {
        res.status(400).send("patch property does not exist!");
      }
    });
  
    app.delete("/api/pokemon/:idOrName", (req, res) => {
      let targetPokemon = req.params.idOrName;
      let foundPokemon = findPokemon(targetPokemon);
      let deletedPokemon;
  
      if (foundPokemon) {
        for (let i = 0; i < pokemon.length; i++) {
          if (pokemon[i]["id"] === foundPokemon.id) {
            deletedPokemon = pokemon.splice(i, 1);
          }
        }
      }
      if (deletedPokemon) {
        if (!pokemon.includes(deletedPokemon[0])) {
          res.status(200).send(deletedPokemon[0]);
        }
      } else {
        res.status(500).send("error");
      }
    });
  
    app.get("/api/pokemon/:idOrName/evolutions", (req, res) => {
      let targetPokemon = req.params.idOrName;
      let foundPokemon = findPokemon(targetPokemon);
  
      if (foundPokemon.evolutions) {
        res.status(200).send(foundPokemon.evolutions);
      } else {
        res.status(200).send([]);
      }
    });
  
    app.get("/api/pokemon/:idOrName/evolutions/previous", (req, res) => {
      let targetPokemon = req.params.idOrName;
      let foundPokemon = findPokemon(targetPokemon);
  
      if (!foundPokemon["Previous evolution(s)"]) {
        res.status(404).send("Pokemon not found!");
      }
  
      if (foundPokemon["Previous evolution(s)"]) {
        res.status(200).send(foundPokemon["Previous evolution(s)"]);
      } else {
        res.status(200).send("This Pokemon has no previous revolutions");
      }
    });
  
    app.get("/api/types", (req, res) => {
      const limit = req.query.limit;
      if (limit) {
        res.send(types.slice(0, limit)).status(200);
      } else {
        res.send(types).status(200);
      }
    });
  
    app.post("/api/types", (req, res) => {
      const newType = req.body.type;
      if (types.includes(newType)) {
        res.status(400).send("This type already exisits");
      } else {
        types.push(newType);
        res.status(201).send(newType);
      }
    });
  
    app.delete("/api/types/:name", (req, res) => {
      const newType = req.params.name;
      let deletedType;
  
      if (types.includes(newType)) {
        const foundIndex = types.indexOf(newType);
        deletedType = types.splice(foundIndex, 1);
      }
  
      if (!types.includes(newType)) {
        res
          .status(200)
          .send(`${deletedType[0]} has been successfully been deleted`);
      } else {
        res.status(400).send("This type does NOT exist yet");
      }
    });
  
    app.get("/api/types/:type/pokemon", (req, res) => {
      const pokeType = req.params.type;
      let returnNameIdArray = [];
      let counter = 1;
  
      for (let pokes of pokemon) {
        if (pokes.types) {
          for (let type of pokes.types) {
            if (type === pokeType) {
              let { id, name } = pokes;
              returnNameIdArray.push({ id, name });
            }
          }
        }
      }
      if (returnNameIdArray.length === 0) {
        res.status(400).send("This type does not exist!");
      }
      res.status(200).send(returnNameIdArray);
    });
  
    app.get("/api/attacks", (req, res) => {
      const limit = req.query.limit;
      const concatedArray = attacks.fast.concat(attacks.special);
      if (limit) {
        res.send(concatedArray.slice(0, limit)).status(200);
      } else {
        res.send(concatedArray).status(200);
      }
    });
  
    app.get("/api/attacks/fast", (req, res) => {
      const limit = req.query.limit;
      if (limit) {
        res.send(attacks.fast.slice(0, limit)).status(200);
      } else {
        res.send(attacks.fast).status(200);
      }
    });
  
    app.get("/api/attacks/special", (req, res) => {
      const limit = req.query.limit;
      if (limit) {
        res.send(attacks.special.slice(0, limit)).status(200);
      } else {
        res.send(attacks.special).status(200);
      }
    });
  
    app.get("/api/attacks/:name", (req, res) => {
      const searchedAttack = req.params.name;
      const concatedArray = attacks.fast.concat(attacks.special);
  
      for (let attack of concatedArray) {
        if (attack.name) {
          if (attack.name === searchedAttack) {
            res.status(200).send(attack);
          }
        }
      }
    });
  
    app.get("/api/attacks/:name/pokemon", (req, res) => {
      const pokeAttack = req.params.name;
      let returnNameIdArray = [];
  
      for (let pokes of pokemon) {
        if (pokes.attacks) {
          const concatedArray = pokes.attacks.fast.concat(pokes.attacks.special);
          for (let attack2 of concatedArray) {
            if (pokeAttack === attack2.name) {
              let { id, name } = pokes;
              returnNameIdArray.push({ id, name });
            }
          }
        }
      }
      if (returnNameIdArray.length === 0) {
        res.status(400).send("This attack does not exist!");
      }
      res.status(200).send(returnNameIdArray);
    });
  
    app.post("/api/attacks/special", (req, res) => {
      const newAttack = req.body;
      if (attacks.special.includes(newAttack)) {
        res.status(400).send("This type already exists");
      } else {
        attacks.special.push(newAttack);
        res.status(201).send(newAttack);
      }
    });
  
    app.patch("/api/attacks/:name", (req, res) => {
      let targetAttack = req.params.name;
      let patchAttack = req.body;
      let updatedAttack;
  
      for (let fastAttack of attacks.fast) {
        if (fastAttack.name === targetAttack) {
          for (let key in patchAttack) {
            fastAttack[key] = patchAttack[key];
          }
          updatedAttack = fastAttack;
        }
      }
      for (let specAttack of attacks.special) {
        if (specAttack.name === targetAttack) {
          for (let key in patchAttack) {
            specAttack[key] = patchAttack[key];
          }
          updatedAttack = specialAttack;
        }
      }
      res.status(200).send(updatedAttack);
    });
  
    app.delete("/api/attacks/:name", (req, res) => {
      const attackToDelete = req.params.name;
      let deletedAttack;
  
      for (let attack of attacks.fast) {
        if (attack.name) {
          if (attack.name === attackToDelete) {
            const foundIndex = attacks.fast.indexOf(attack);
            deletedAttack = attacks.fast.splice(foundIndex, 1);
            console.log(deletedAttack);
          }
        }
      }
      for (let attack of attacks.special) {
        if (attack.name) {
          if (attack.name === attackToDelete) {
            const foundIndex = attacks.special.indexOf(attack);
            deletedAttack = attacks.special.splice(foundIndex, 1);
          }
        }
      }
      if (deletedAttack) {
        res
          .status(200)
          .send("The attack has been deleted");
      } else {
        res.status(400).send("This attack does NOT exist yet");
      }
    });
  
  return app;
  };
  
  module.exports = { setupServer };