require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.APP_PORT || 3000;
const NAME = process.env.APP_NAME || "Application";

app.get("/", (req, res) => {
    res.json({
        message: `${NAME} Docker Template Running`,
        environment: process.env.NODE_ENV
    });
});

app.listen(PORT, () => {
    console.log(`${NAME} running on port ${PORT}`);
});