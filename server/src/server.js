import express from 'express';
import routes from './routes/routes';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import errorhandler from 'errorhandler';
require('./database');

// Setup
const app = express();
const PORT = 4000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'User-Agent, Cache-Control, Postman-Token, Host, Accept-Encoding, Connection, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

// All OPTIONS requests return a simple status: 'OK'
app.options('*', (req, res) => {
  res.json({
    status: 'OK'
  });
});

app.use(cors())
app.use(helmet()) // Security library for HTTP requests.

app.use(express.static(path.join(__dirname, '/build')));
app.use(express.json());

// Routes and CORS
app.get('/', (req, res) => {
    res.send(`<h1>Servidor Funcionando!</h1>`)
});

app.use(routes);

// Ending and Serving the Files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html', {maxAge: 86400000}));
});

app.use(errorhandler());

app.listen(PORT, () => {
    console.log(`Listen in on http://localhost:${PORT}/`)
});
