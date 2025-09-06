const { Mapping, Patient, Doctor } = require('../models/mapping');

// Assign doctor to patient
exports.assignDoctor = async (req, res) => {
    try {
        const { patientId, doctorId } = req.body;

        // patient exists
        const patient = await Patient.findByPk(patientId);
        if (!patient) return res.status(404).json({ message: "Patient not found" });

        // doctor exists
        const doctor = await Doctor.findByPk(doctorId);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        const mapping = await Mapping.create({ patientId, doctorId });
        res.status(201).json({ message: "Doctor assigned to patient", mapping });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all mappings
exports.getMappings = async (req, res) => {
    try {
        const mappings = await Mapping.findAll({
            include: [Patient, Doctor],
        });
        res.json(mappings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all doctors assigned to specific patient
exports.getDoctorsByPatient = async (req, res) => {
    try {
        const patientId = req.params.patientId;
        const mappings = await Mapping.findAll({
            where: { patientId },
            include: [Doctor],
        });
        res.json(mappings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Remove doctor from patient
exports.removeMapping = async (req, res) => {
    try {
        const mapping = await Mapping.findByPk(req.params.id);
        if (!mapping) return res.status(404).json({ message: "Mapping not found" });

        await mapping.destroy();
        res.json({ message: "Mapping removed" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
