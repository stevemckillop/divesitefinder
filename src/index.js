const { setupServer } = require("./server.js");

const server = setupServer();
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log("Server listening on Port", PORT);
});