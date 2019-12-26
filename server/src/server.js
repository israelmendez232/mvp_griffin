import express from 'express';
import routes from './routes/routes';
require('./database');

// Setup
const app = express();
const PORT = 4000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());

// // Connection into the Database
// const client = new Client({
//   user: config.db_dev.user,
//   host: config.db_dev.host,
//   database: config.db_dev.db,
//   password: config.db_dev.pass,
//   port: config.db_dev.port
// });
// client.connect();

// Routes
app.get('/', (req, res) => {
    res.send(`<h1>Servidor Funcionando!</h1>`)
});

app.use(routes);

// Ending
app.listen(PORT, () => {
    console.log(`Listen in on http://localhost:${PORT}/`)
});
