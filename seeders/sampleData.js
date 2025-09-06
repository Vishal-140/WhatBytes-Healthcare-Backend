const { User, Doctor, Patient, Mapping } = require('../models');

async function seed() {
    await User.bulkCreate([
        { name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' },
        { name: 'Doctor User', email: 'doctor@example.com', password: 'doctor123', role: 'doctor' },
        { name: 'Patient User', email: 'patient@example.com', password: 'patient123', role: 'patient' },
    ]);

    await Doctor.bulkCreate([
        { name: 'Dr. Strange', specialization: 'Cardiology', email: 'strange@hospital.com' },
        { name: 'Dr. House', specialization: 'Diagnostics', email: 'house@hospital.com' },
    ]);

    await Patient.bulkCreate([
        { name: 'John Doe', age: 30, gender: 'Male', history: 'No history', createdBy: 1 },
        { name: 'Jane Smith', age: 25, gender: 'Female', history: 'Allergy to penicillin', createdBy: 1 },
    ]);

    await Mapping.bulkCreate([
        { patientId: 1, doctorId: 1 },
        { patientId: 2, doctorId: 2 },
    ]);

    console.log('Sample data inserted!');
}

seed();
