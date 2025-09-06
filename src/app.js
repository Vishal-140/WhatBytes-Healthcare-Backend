const express = require("express");
const { Sequelize } = require("sequelize");
require("dotenv").config();
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const mappingRoutes = require('./routes/mappingRoutes');

const app = express();

// Routes
const authRoutes = require('./routes/auth');

// Protected routes
app.use('/api/patients', patientRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/mappings', mappingRoutes);

// Middleware
app.use(express.json());
app.use('/api/auth', authRoutes);

// Database connection
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS || null,
    {
        host: process.env.DB_HOST,
        port: process.env.PORT || 5432,
        dialect: "postgres",
        logging: false,
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("----------- Database connected successfully -----------");
    } catch (error) {
        console.error("----------- Unable to connect to the database: -----------", error);
    }
})();

// Test Routes
app.get("/", (req, res) => {
    res.send("WhatBytes Healthcare Backend Running");
});

module.exports = app;