const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from EXPRESS API' });
});

app.get('/about', (req, res) => {
    res.json({ message: 'This is about page' });
});

app.get('/tools', (req, res) => {
    res.json({ message: 'This is tools page' });
});

app.get('/community', (req, res) => {
    res.json({ message: 'This is community page' });
});

app.get('/learn', (req, res) => {
    res.json({ message: 'This is learn page' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Express REST API is running on http://localhost:${PORT}`);
});