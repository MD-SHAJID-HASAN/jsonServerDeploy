const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set up default middlewares (logger, static, CORS, etc.)
server.use(middlewares);

// Set up a default route (optional)
server.get('/', (req, res) => {
  res.jsonp({ message: 'Welcome to JSON Server!' });
});

// Use the router for the actual API
server.use('/api', router);

// Start the server on a specific port
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});
