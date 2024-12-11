import express, { Request, Response } from 'express';
const laminatorController =  require('../controllers/laminatorController');

const router = express.Router();

// Rota para buscar os dados do laminador
router.get('/laminator/search', laminatorController.index);

module.exports = router;
