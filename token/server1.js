const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json()); // IMPORTANT: to read JSON body

const PORT = 5000;
const SECRET_KEY = "mysecretkey";
const API_KEY = "abcd123";

// Dummy user
const user = {
    id: 1,
    username: "admin",
    password: "1234"
};

// ✅ API Key Middleware
function checkApiKey(req, res, next) {
    const key = req.headers["api-key"];

    if (!key) {
        return res.status(401).json({ message: "API Key missing" });
    }

    if (key !== API_KEY) {
        return res.status(403).json({ message: "Invalid API key" });
    }

    next();
}

// ✅ Home route
app.get("/", (req, res) => {
    res.send("Welcome to API + JWT Project");
});

// ✅ Login route (generate JWT)
app.post("/login", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Request body missing" });
    }

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username or password missing" });
    }

    if (username === user.username && password === user.password) {
        const token = jwt.sign(
            { id: user.id, username: user.username },
            SECRET_KEY,
            { expiresIn: "1h" }
        );

        return res.json({ token });
    }

    return res.status(401).json({ message: "Invalid credentials" });
});

// ✅ JWT Middleware
function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "Token missing" });
    }

    const token = authHeader.split(" ")[1]; // Bearer TOKEN

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        }

        req.user = decoded;
        next();
    });
}

// ✅ Protected route (JWT only)
app.get("/profile", verifyToken, (req, res) => {
    res.json({
        message: "Welcome to profile",
        user: req.user
    });
});


// ✅ Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
