const { Doctor } = require('../models/doctor');

// Add new doctor
exports.createDoctor = async (req, res) => {
    try {
        const { name, email, specialization } = req.body;
        const doctor = await Doctor.create({ name, email, specialization });
        res.status(201).json({ message: "Doctor added", doctor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all doctors
exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.findAll();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific doctor
exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update
exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        await doctor.update(req.body);
        res.json({ message: "Doctor updated", doctor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete
exports.deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByPk(req.params.id);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        await doctor.destroy();
        res.json({ message: "Doctor deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
