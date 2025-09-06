const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authenticateToken = require('../middlewares/auth');

// All routes are protected
router.post('/', authenticateToken, doctorController.createDoctor);
router.get('/', authenticateToken, doctorController.getDoctors);
router.get('/:id', authenticateToken, doctorController.getDoctorById);
router.put('/:id', authenticateToken, doctorController.updateDoctor);
router.delete('/:id', authenticateToken, doctorController.deleteDoctor);

module.exports = router;
