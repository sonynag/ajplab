const express = require("express");
const app = express();

const PORT = 5000;
const API_KEY = "abcd123";

function checkApiKey(req, res, next) {
    const key1 = req.headers["api-key"];

    // Check if API key is missing
    if (!key1) {
        return res.status(401).json({ message: "API Key missing" });
    }

    // Check if API key is wrong
    if (key1 !== API_KEY) {
        return res.status(403).json({ message: "Invalid API key" });
    }

    // If everything is correct → go to next
    next();
}

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to API key project");
});

app.get("/students", checkApiKey, (req, res) => {
    res.json([
        {
            id: 1,
            name: "sony"
        }
    ]);
});

// Server
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
