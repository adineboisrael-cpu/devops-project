const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>DevOps Project 🚀</h1>
        <p>Application successfully deployed!</p>
        <p>Running inside Docker.</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
