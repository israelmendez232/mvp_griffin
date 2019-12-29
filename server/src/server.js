import express from 'express';
import routes from './routes/routes';
import path from 'path';
require('./database');

// Setup
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, '/build')));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`<h1>Servidor Funcionando!</h1>`)
});

app.use(routes);

// Ending and Serving the Files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Listen in on http://localhost:${PORT}/`)
});
