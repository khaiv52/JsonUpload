const jsonServer = require("json-server");  // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("shopping.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // setting port to 8080 if not

server.use(middlewares);
server.use(router)

server.listen(port)