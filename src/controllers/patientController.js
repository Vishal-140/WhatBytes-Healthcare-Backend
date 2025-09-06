const { Patient } = require('../models/patient');

// Add new patient
exports.createPatient = async (req, res) => {
    try {
        const { name, age, gender, history } = req.body;
        const createdBy = req.user.id; // From JWT

        const patient = await Patient.create({ name, age, gender, history, createdBy });
        res.status(201).json({ message: "Patient added", patient });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all patients created by authenticated user
exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll({ where: { createdBy: req.user.id } });
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific patient
exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (!patient) return res.status(404).json({ message: "Patient not found" });
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update
exports.updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (!patient) return res.status(404).json({ message: "Patient not found" });

        await patient.update(req.body);
        res.json({ message: "Patient updated", patient });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete
exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByPk(req.params.id);
        if (!patient) return res.status(404).json({ message: "Patient not found" });

        await patient.destroy();
        res.json({ message: "Patient deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
