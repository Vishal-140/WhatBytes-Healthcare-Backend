const express = require('express');
const router = express.Router();
const mappingController = require('../controllers/mappingController');
const authenticateToken = require('../middlewares/auth');

router.post('/', authenticateToken, mappingController.assignDoctor);
router.get('/', authenticateToken, mappingController.getMappings);
router.get('/:patientId', authenticateToken, mappingController.getDoctorsByPatient);
router.delete('/:id', authenticateToken, mappingController.removeMapping);

module.exports = router;
