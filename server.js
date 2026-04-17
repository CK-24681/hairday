const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server.json');
const middlewares = jsonServer.defaults({
  static: './dist'
});

// Se não tiver (rodando local), ele usa a 3333.
const port = process.env.PORT || 3333;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});