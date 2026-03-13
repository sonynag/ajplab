const express = require('express');
const app = express();
const PORT = 3000;

//addition endpoint: /add?a=10&b=20
app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: a + b });
})

//subtract endpoint: /add?a=10&b=20
app.get('/sub', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: a - b });
})

//multiplication endpoint: /add?a=10&b=20
app.get('/mul', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: a * b });
})

//division endpoint: /add?a=10&b=20
app.get('/div', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    res.json({ result: a / b });
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})