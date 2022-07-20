const { setupServer } = require("./server.js");

const server = setupServer();
const PORT = process.env.PORT || 4000;

(async () => {
    try {
        server.listen(PORT, () => { 
        console.log("Server listening on Port", PORT);
        });
    }
    catch (err) {
        console.error(`App failed to start ${err}`);
        process.exit(-1);
    }
})();