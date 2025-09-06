const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authenticateToken = require('../middlewares/auth');

// All routes are protected
router.post('/', authenticateToken, patientController.createPatient);
router.get('/', authenticateToken, patientController.getPatients);
router.get('/:id', authenticateToken, patientController.getPatientById);
router.put('/:id', authenticateToken, patientController.updatePatient);
router.delete('/:id', authenticateToken, patientController.deletePatient);

module.exports = router;
